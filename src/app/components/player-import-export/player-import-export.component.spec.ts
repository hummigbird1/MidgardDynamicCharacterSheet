import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerImportExportComponent } from './player-import-export.component';

describe('PlayerImportExportComponent', () => {
  let component: PlayerImportExportComponent;
  let fixture: ComponentFixture<PlayerImportExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerImportExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerImportExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
