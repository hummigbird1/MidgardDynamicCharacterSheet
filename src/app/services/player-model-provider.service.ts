import { Injectable } from '@angular/core';
import { Player } from '../models/player'
@Injectable({
  providedIn: 'root'
})
export class PlayerModelProviderService {

  private _player: Player;
  constructor() {
    this._player = new Player();
  }

  get player(): Player {
    return this._player;
  }

  set player(player: Player) {
    this._player = player;
  }
}
