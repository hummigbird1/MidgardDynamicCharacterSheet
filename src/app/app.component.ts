import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from './models/player';
import { PlayerModelProviderService } from './services/player-model-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MidgardDynamicCharacterSheet';

  constructor(private pmps: PlayerModelProviderService) {
  }

  get player(): Player {
    return this.pmps.player;
  }

  set player(p: Player) {
    this.pmps.player = p;
  }
}
