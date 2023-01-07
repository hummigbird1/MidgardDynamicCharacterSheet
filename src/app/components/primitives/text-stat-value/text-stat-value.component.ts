import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlayerModeProviderService } from 'src/app/services/player-mode-provider.service';

@Component({
  selector: 'app-text-stat-value',
  templateUrl: './text-stat-value.component.html',
  styleUrls: ['./text-stat-value.component.css']
})
export class TextStatValueComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() multiline: boolean = false;
  @Input() editMode: boolean = false;

  constructor() {
    
  }

  onModelChange(event:Event){
    this.valueChange.emit(this.value);
  }
}
