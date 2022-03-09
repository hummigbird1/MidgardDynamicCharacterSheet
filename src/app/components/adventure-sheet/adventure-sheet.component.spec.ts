import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
