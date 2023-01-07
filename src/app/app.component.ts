import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Player } from './models/player';
import { PlayerLocalstorageService } from './services/player-localstorage.service';
import { PlayerModeProviderService } from './services/player-mode-provider.service';
import { PlayerModelProviderService } from './services/player-model-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Midgard Dynamic Character Sheet';

  constructor(private pmps: PlayerModelProviderService, 
    private plss: PlayerLocalstorageService, 
    private pmodeps: PlayerModeProviderService,
    private titleService:Title) {
  }

  ngAfterViewInit(): void {
    const playerFromStorage = this.plss.loadPlayer();
    if (playerFromStorage != null) {
      this.pmps.player = playerFromStorage;
      this.titleService.setTitle(playerFromStorage.name + ' - Midgard Dynamic Character Sheet');
    }
  }

  get player(): Player {
    return this.pmps.player;
  }

  set player(p: Player) {
    this.pmps.player = p;
    this.titleService.setTitle(p.name + ' - Midgard Dynamic Character Sheet');
  }

  get editMode():boolean {
    return this.pmodeps.editMode;
  }

  set editMode(b:boolean) {
     this.pmodeps.editMode = b;
  }
}
