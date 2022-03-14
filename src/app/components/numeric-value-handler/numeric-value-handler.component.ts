import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numeric-value-handler',
  templateUrl: './numeric-value-handler.component.html',
  styleUrls: ['./numeric-value-handler.component.css']
})
export class NumericValueHandlerComponent {

  @Input() label: string = '';
  @Input() currentValue: Number = 0;
  @Input() minValue: Number = 0;
  @Input() maxValue: Number = 0;
  @Input() baseValue: Number = 0;
  @Input() showReset: boolean = true;
  @Output() currentValueChange = new EventEmitter<Number>();

  constructor() { }

  get isValid() {
    if (this.currentValue === null || this.currentValue === undefined)
      return false;

    return this.currentValue >= this.minValue && this.currentValue <= this.maxValue;
  }

  onModelChange(event: Event): void {
    // Unclear workaround:
    // Without binding the ngModelEvent and emitting the currentValue ... direct edits of the input control are not registered outside of this component
    // Question is why?  
    this.currentValueChange.emit(this.currentValue);
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
      this.updateCurrentValue(Number(this.currentValue) + 1);
    }
  }

  countDown() {
    if (this.canCountDown) {
      this.updateCurrentValue(Number(this.currentValue) - 1);
    }
  }

  resetValue() {
    this.updateCurrentValue(this.baseValue);
  }

  // TODO Only works when input is of type "text" (otherwise we cant get the raw text input to work with https://stackoverflow.com/a/18853513)
  // But then the currentValue can change types (becoming a string instead of a number breaking other things in here (e.g. the isValid))
  // so to make this work we would need to switch to a text input approach and make a lot of try-cast to numbers 
  // onKeyDown(event: KeyboardEvent) {
  //   const inputControl = event.target as HTMLInputElement;
  //   console.log(inputControl.innerText);
  //   if (event.key === "=") {
  //     event.preventDefault();
  //     try {
  //       this.updateCurrentValue(Number(eval(inputControl.value)));
  //     }
  //     catch {
  //       // inputControl.valueAsNumber = Number(this.currentValue);
  //     }
  //   }
  // }

  private updateCurrentValue(value: Number): void {
    this.currentValue = value;
    this.currentValueChange.emit(this.currentValue);
  }
}
