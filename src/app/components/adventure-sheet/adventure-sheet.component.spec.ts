import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Player } from 'src/app/models/player';

import { AdventureSheetComponent } from './adventure-sheet.component';

describe('AdventureSheetComponent', () => {
  let component: AdventureSheetComponent;
  let fixture: ComponentFixture<AdventureSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureSheetComponent);
    component = fixture.componentInstance;
    component.player = new Player();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
