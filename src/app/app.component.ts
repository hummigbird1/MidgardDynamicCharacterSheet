import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from './models/player';
import { PlayerLocalstorageService } from './services/player-localstorage.service';
import { PlayerModelProviderService } from './services/player-model-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'MidgardDynamicCharacterSheet';

  constructor(private pmps: PlayerModelProviderService, private plss: PlayerLocalstorageService) {
  }

  ngAfterViewInit(): void {
    const playerFromStorage = this.plss.loadPlayer();
    if (playerFromStorage != null) {
      this.pmps.player = playerFromStorage;
    }
  }

  get player(): Player {
    return this.pmps.player;
  }

  set player(p: Player) {
    this.pmps.player = p;
  }
}
