import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';

import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
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
