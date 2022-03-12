import { Component, OnInit } from '@angular/core';
import { PlayerModelProviderService } from 'src/app/services/player-model-provider.service';

@Component({
  selector: 'app-player-import-export',
  templateUrl: './player-import-export.component.html',
  styleUrls: ['./player-import-export.component.css']
})
export class PlayerImportExportComponent implements OnInit {

  constructor(private playerModelProviderService: PlayerModelProviderService) { }

  jsonContent: string | undefined;
  ngOnInit(): void {
  }

  getPlayerAsJson(): string {
    return JSON.stringify(this.playerModelProviderService.player, null, 2);
  }

  importPlayer(event: Event): void {
    if (this.jsonContent === undefined) {
      return;
    }
    this.setPlayerFromJson(this.jsonContent);
  }

  exportPlayer(event: Event): void {
    this.jsonContent = this.getPlayerAsJson();
  }

  setPlayerFromJson(playerJson: string): void {
    this.playerModelProviderService.player = JSON.parse(playerJson);
  }
}
