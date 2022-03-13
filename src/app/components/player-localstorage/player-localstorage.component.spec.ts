import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLocalstorageComponent } from './player-localstorage.component';

describe('PlayerLocalstorageComponent', () => {
  let component: PlayerLocalstorageComponent;
  let fixture: ComponentFixture<PlayerLocalstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerLocalstorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLocalstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
