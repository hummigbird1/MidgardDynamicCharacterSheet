import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  @Input() player!: Player;
  @Output() playerChange = new EventEmitter<Player>();
  @Input() editMode: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
