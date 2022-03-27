import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConsumableItem, Player } from 'src/app/models/player';

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

  addItem(event: Event): void {
    this.player.items.push(new ConsumableItem());
  }

  removeItem(itemToRemove: ConsumableItem): void{
    var itemIndex = this.player.items.indexOf(itemToRemove);
    this.player.items.splice(itemIndex, 1);
  }
}
