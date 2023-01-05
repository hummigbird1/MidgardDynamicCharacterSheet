import { Component, OnInit } from '@angular/core';
import { PlayerModelProviderService } from 'src/app/services/player-model-provider.service';

@Component({
  selector: 'app-player-import-export',
  templateUrl: './player-import-export.component.html',
  styleUrls: ['./player-import-export.component.css']
})
export class PlayerImportExportComponent implements OnInit {

  constructor(private playerModelProviderService: PlayerModelProviderService) { }

  actionResult: string | null = null;
  jsonContent: string = '';
  ngOnInit(): void {
  }

  getPlayerAsJson(): string {
    return JSON.stringify(this.playerModelProviderService.player, null, 2);
  }

  importPlayer(event: Event): void {
    if (this.jsonContent === undefined || this.jsonContent == '') {
      this.actionResult = "Nothing to import. Paste a character json into the text area!"
      return;
    }
    this.setPlayerFromJson(this.jsonContent);
  }

  exportPlayer(event: Event): void {
    try {
      this.jsonContent = this.getPlayerAsJson();
      this.actionResult = "Exported successfully";
    }
    catch (error) {
      this.setActionResultFromError(error);
    }
  }

  setPlayerFromJson(playerJson: string): void {
    try {
      this.playerModelProviderService.player = JSON.parse(playerJson);
      this.actionResult = "Imported successfully";
    }
    catch (error) {
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
