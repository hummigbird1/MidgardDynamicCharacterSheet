import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerModeProviderService } from 'src/app/services/player-mode-provider.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  @Input() player!: Player;
  @Output() playerChange = new EventEmitter<Player>();
  constructor(public pmodeps: PlayerModeProviderService) { }

  ngOnInit(): void {
  }

}
