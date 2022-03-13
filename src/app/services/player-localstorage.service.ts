import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerLocalstorageService {

  private storageKey: string = "Player";
  constructor() { }

  savePlayer(player: Player): void {
    localStorage.setItem(this.storageKey, JSON.stringify(player));
  }

  loadPlayer(): Player | null {
    const playerJson = localStorage.getItem(this.storageKey);
    if (playerJson === null) {
      return null;
    }

    return JSON.parse(playerJson);
  }

  deletePlayer(): void {
    localStorage.removeItem(this.storageKey);
  }
}
