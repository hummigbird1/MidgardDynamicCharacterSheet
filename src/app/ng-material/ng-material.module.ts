import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { TabsComponent } from './tabs/tabs.component'


@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    MatTabsModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,

    TabsComponent
  ]
})
export class NgMaterialModule { }
