import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Player } from './models/player';
import { PlayerLocalstorageService } from './services/player-localstorage.service';
import { PlayerModelProviderService } from './services/player-model-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Midgard Dynamic Character Sheet';
  editMode = true;

  constructor(private pmps: PlayerModelProviderService, 
    private plss: PlayerLocalstorageService, 
    private titleService:Title) {
  }

  ngAfterViewInit(): void {
    const playerFromStorage = this.plss.loadPlayer();
    if (playerFromStorage != null) {
      this.pmps.player = playerFromStorage;
      this.titleService.setTitle(playerFromStorage.name + ' - Midgard Dynamic Character Sheet');
      this.editMode = false;
    }
  }

  get player(): Player {
    return this.pmps.player;
  }

  set player(p: Player) {
    this.pmps.player = p;
    this.titleService.setTitle(p.name + ' - Midgard Dynamic Character Sheet');
  }
}
