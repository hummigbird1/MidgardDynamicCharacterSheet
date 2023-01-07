import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-basic-character-stats',
  templateUrl: './basic-character-stats.component.html',
  styleUrls: ['./basic-character-stats.component.css']
})
export class BasicCharacterStatsComponent implements OnInit {
  @Input() player!: Player;
  @Output() playerChange = new EventEmitter<Player>();
  constructor() {
  }

  ngOnInit(): void {
  }
}
