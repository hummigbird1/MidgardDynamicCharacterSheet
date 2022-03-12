import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numeric-value-handler',
  templateUrl: './numeric-value-handler.component.html',
  styleUrls: ['./numeric-value-handler.component.css']
})
export class NumericValueHandlerComponent implements OnInit {

  @Input() label: string = 'Default';
  @Input() currentValue: Number = 0;
  @Input() minValue: Number = 0;
  @Input() maxValue: Number = 0;
  @Input() baseValue: Number | string= 0;
  @Input() showReset: boolean = true;
  @Output() currentValueChange = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
    this.resetValue();
  }

  // TODO MaxWert muss überschreibbar werden wenn man z.B. im Level Up Modus ist
  countUp() {
    if(this.currentValue < this.maxValue) {
      this.currentValue = Number(this.currentValue)+1;
      this.currentValueChange.emit(this.currentValue);
    }
  }

  countDown() {
    if(this.currentValue > this.minValue) {
      this.currentValue = Number(this.currentValue)-1;
      this.currentValueChange.emit(this.currentValue);
    }
  }

  resetValue() {
    this.currentValue = Number(this.baseValue);
    this.currentValueChange.emit(this.currentValue);
  }
}
