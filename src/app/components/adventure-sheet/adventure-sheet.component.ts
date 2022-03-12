import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-adventure-sheet',
  templateUrl: './adventure-sheet.component.html',
  styleUrls: ['./adventure-sheet.component.css']
})
export class AdventureSheetComponent implements OnInit {

  @Input() player!: Player;
  @Output() playerChange = new EventEmitter<Player>();

  constructor() { }

  ngOnInit(): void {
  }

}
