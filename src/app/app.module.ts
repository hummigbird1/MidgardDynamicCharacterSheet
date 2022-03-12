import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumericValueHandlerComponent } from './components/numeric-value-handler/numeric-value-handler.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { AdventureSheetComponent } from './components/adventure-sheet/adventure-sheet.component';
import { PlayerImportExportComponent } from './components/player-import-export/player-import-export.component';
import { PlayerModelProviderService } from './services/player-model-provider.service';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    NumericValueHandlerComponent,
    AdventureSheetComponent,
    PlayerImportExportComponent,
    CharacterSheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgMaterialModule,
  ],
  providers: [ PlayerModelProviderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
