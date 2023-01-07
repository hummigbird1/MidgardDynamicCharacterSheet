import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Player } from 'src/app/models/player';

import { BasicCharacterStatsComponent } from './basic-character-stats.component';

describe('BasicCharacterStatsComponent', () => {
  let component: BasicCharacterStatsComponent;
  let fixture: ComponentFixture<BasicCharacterStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCharacterStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicCharacterStatsComponent);
    component = fixture.componentInstance;
    component.player = new Player();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
