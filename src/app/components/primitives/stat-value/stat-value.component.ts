import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DiceRollerService } from 'src/app/services/dice-roller.service';
import { PlayerModeProviderService } from 'src/app/services/player-mode-provider.service';

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

  public canRoll = true;
  public rollResultAvailable = false;
  public valueCheckSuccessful = false;
  public rollResult = 0;
  constructor(public pmodeps: PlayerModeProviderService, 
    private diceRollerService:DiceRollerService) { }

  onClick() {
    this.canRoll = false;
    this.diceRollerService.rollDice(this.noOfDice, this.diceSides).subscribe(x => this.evaluateDiceRollResult(this.value, x.result));
  }

  private evaluateDiceRollResult(val: number, diceRollResult: number) {
    this.rollResult = diceRollResult;
    if (diceRollResult <= val) { 
      this.valueCheckSuccessful = true;
    } else {
      this.valueCheckSuccessful = false;
    }
    this.rollResultAvailable = true;
    setTimeout(() => { 
      this.resetRollability();
    }, 10000);
  }

  private resetRollability()  {
    this.canRoll = true;
    this.rollResultAvailable = false;
  }
}
