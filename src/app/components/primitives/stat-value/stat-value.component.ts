import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DiceRollerService } from 'src/app/services/dice-roller.service';

@Component({
  selector: 'app-stat-value',
  templateUrl: './stat-value.component.html',
  styleUrls: ['./stat-value.component.css']
})
export class StatValueComponent {

  @Input() label: string = '';
  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>();

  @Input() noOfDice: number = 1;
  @Input() diceSides: number = 100;

  @Input() isChallengeableStat: boolean = false;
  @Input() editMode: boolean = false;

  public canRoll = true;
  public rollResultAvailable = false;
  public valueCheckSuccessful = false;
  public rollResult = 0;
  private timeout: NodeJS.Timeout | undefined;
  constructor(private diceRollerService:DiceRollerService) { }

  onClick() {
    this.canRoll = false;
    this.diceRollerService.rollDice(this.noOfDice, this.diceSides).subscribe(x => this.evaluateDiceRollResult(this.value, x.result));
  }

  onModelChange(event:Event) {
    this.valueChange.emit(this.value);
  }

  onResetDiceRollResult() {
    if(this.timeout !== undefined){
      clearTimeout(this.timeout);
    }
    this.resetRollability();
  }

  private evaluateDiceRollResult(val: number, diceRollResult: number) {
    this.rollResult = diceRollResult;
    if (diceRollResult <= val) { 
      this.valueCheckSuccessful = true;
    } else {
      this.valueCheckSuccessful = false;
    }
    this.rollResultAvailable = true;
    this.timeout = setTimeout(() => { 
      this.resetRollability();
    }, 30000);
  }

  private resetRollability()  {
    this.canRoll = true;
    this.rollResultAvailable = false;
  }
}
