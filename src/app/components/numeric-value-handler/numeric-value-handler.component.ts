import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CheckEvaluatableToNumberResult, CheckNumberResult } from './checkresults';

@Component({
  selector: 'app-numeric-value-handler',
  templateUrl: './numeric-value-handler.component.html',
  styleUrls: ['./numeric-value-handler.component.css']
})
export class NumericValueHandlerComponent {

  @Input() label: string = '';
  _currentValue: number = 0;
  currentText: string = '0';
  @Input() minValue: number = 0;
  @Input() maxValue: number = 0;
  @Input() baseValue: number = 0;
  @Input() showReset: boolean = true;
  @Output() currentValueChange = new EventEmitter<number>();
  currentTextChange = new EventEmitter<string>();
  projectingValue: boolean = false;
  projectedValue: number = 0;

  constructor() { }

  get isValid() {
    if (this.currentValue === null || this.currentValue === undefined)
      return false;

    const canEvaluatableToNumberCheckResult = this.canEvaluatableToNumber(this.currentText);
    if (!canEvaluatableToNumberCheckResult.isEvaluatable) {
      return false;
    }

    return this.isNumberWithinRange(canEvaluatableToNumberCheckResult.value) && this.isNumberWithinRange(this._currentValue);
  }

  
  get currentValue(): number {
    return this._currentValue;
  }

  @Input()
  set currentValue(val: number) {
    this._currentValue = val;
    this.currentText = this.currentValue.toString();
    this.currentValueChange.emit(this._currentValue);

  }

  onModelChange(event: Event): void {
    this.projectingValue = false;
    // Unclear workaround:
    // Without binding the ngModelEvent and emitting the currentValue ... direct edits of the input control are not registered outside of this component
    // Question is why?
    const isNumberCheckResult = this.isValidNumber(this.currentText);
    const canEvaluatableToNumberCheckResult = this.canEvaluatableToNumber(this.currentText);
    if (isNumberCheckResult.isNumber && this.isNumberWithinRange(isNumberCheckResult.value)) {
      this.currentValue = isNumberCheckResult.value;
    }
    else if (canEvaluatableToNumberCheckResult.isEvaluatable && canEvaluatableToNumberCheckResult.isExpressionTerminated && this.isNumberWithinRange(canEvaluatableToNumberCheckResult.value)) {
      this.currentValue = canEvaluatableToNumberCheckResult.value;
    }
    else if (canEvaluatableToNumberCheckResult.isEvaluatable && !canEvaluatableToNumberCheckResult.isExpressionTerminated) {
      this.projectingValue = true;
      this.projectedValue = canEvaluatableToNumberCheckResult.value;
    }
  }

  get canCountUp() {
    return this.currentValue < this.maxValue;
  }

  get canCountDown() {
    return this.currentValue > this.minValue;
  }

  // TODO MaxWert muss überschreibbar werden wenn man z.B. im Level Up Modus ist
  countUp() {
    if (this.canCountUp) {
      this.currentValue = this.currentValue + 1;
    }
  }

  countDown() {
    if (this.canCountDown) {
      this.currentValue = this.currentValue - 1;
    }
  }

  resetValue() {
    if (this.isValid) {
      this.currentValue = this.baseValue;
    }
    else {
      // Restore last valid value by passing it through the public property setter
      this.currentValue = this._currentValue;
    }
  }

  private isNumberWithinRange(val: number): boolean {
    return val >= this.minValue && val <= this.maxValue;
  }

  private canEvaluatableToNumber(text: string): CheckEvaluatableToNumberResult {
    const result = new CheckEvaluatableToNumberResult();
    if (this.isEmptyString(text))
      return result;

    try {
      let sanitizedText = text;
      if (text.endsWith("=")) {
        sanitizedText = text.substring(0, text.length - 1);
        result.isExpressionTerminated = true;
      }
      var evalResult = eval(sanitizedText);
      const numberEvaluationResult = this.isValidNumber(evalResult);

      result.isEvaluatable = numberEvaluationResult.isNumber;
      result.value = numberEvaluationResult.value;

      return result;
    }
    catch {
      return result;
    }
  }

  private isValidNumber(input: any): CheckNumberResult {
    if (typeof input === "string") {
      return this.isTextValidNumber(input);
    }
    else if (typeof input === "number") {
      const flooredNumber = this.getFlooredValue(input);
      const result = new CheckNumberResult();
      result.isNumber = this.isNumberValidNumber(flooredNumber);
      result.value = flooredNumber
      return result;
    }
    else {
      return new CheckNumberResult();
    }
  }
  private isNumberValidNumber(val: number): boolean {
    return Number.isSafeInteger(val);
  }

  private getFlooredValue(val: number): number {
    return Math.floor(val);
  } 

  private isTextValidNumber(text: string): CheckNumberResult {
    const result = new CheckNumberResult();
    if (this.isEmptyString(text))
      return result;

    const converterFlooredNumber = this.getFlooredValue(Number(text).valueOf());
    result.isNumber = this.isNumberValidNumber(converterFlooredNumber);
    result.value = converterFlooredNumber;
    return result;
  }

  private isEmptyString(text: string): boolean {
    return text === null || text === undefined || text.trim() === '';

  }
}
