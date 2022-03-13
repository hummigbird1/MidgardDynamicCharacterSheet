import { Component, OnInit } from '@angular/core';
import { PlayerLocalstorageService } from 'src/app/services/player-localstorage.service';
import { PlayerModelProviderService } from 'src/app/services/player-model-provider.service';

@Component({
  selector: 'app-player-localstorage',
  templateUrl: './player-localstorage.component.html',
  styleUrls: ['./player-localstorage.component.css']
})
export class PlayerLocalstorageComponent implements OnInit {

  actionResult: string | null = null;
  constructor(private pmps: PlayerModelProviderService, private plss: PlayerLocalstorageService) { }

  ngOnInit(): void {
  }

  loadPlayerFromStorage(event: Event): void {
    try {
      const loadedPlayer = this.plss.loadPlayer();
      if (loadedPlayer !== null) {
        this.pmps.player = loadedPlayer;
        this.actionResult = "Player loaded successfully";
      } else {
        this.actionResult = "No player found in local storage";
      }

    } catch (error) {
      this.setActionResultFromError(error);
    }
  }

  savePlayerToStorage(event: Event): void {
    try {
      this.plss.savePlayer(this.pmps.player);
      this.actionResult = "Player stored successfully";
    } catch (error) {
      this.setActionResultFromError(error);
    }
  }

  deletePlayerFromStorage(event: Event): void {
    try {
      this.plss.deletePlayer();
      this.actionResult = "Player data deleted!";
    } catch (error) {
      this.setActionResultFromError(error);
    }
  }

  private setActionResultFromError(error: any): void {
    if (typeof error === "string") {
      this.actionResult = error;
    }
    else if (error instanceof Error) {
      this.actionResult = error.message;
    }
  }
}
