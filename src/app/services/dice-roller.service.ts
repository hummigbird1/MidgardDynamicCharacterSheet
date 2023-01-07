import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolzDiceRollResult } from '../models/rolz-dice-roll-result'

@Injectable({
  providedIn: 'root'
})
export class DiceRollerService {

  constructor(private httpClient: HttpClient) { }

  rollDice(noOfDice: number, diceSides: number): Observable<RolzDiceRollResult> {
    // https://rolz.org/help/api
    const diceParam = noOfDice + 'd' + diceSides;
    return this.httpClient.get<RolzDiceRollResult>(`https://rolz.org/api/?${diceParam}.json`);
  }
}
