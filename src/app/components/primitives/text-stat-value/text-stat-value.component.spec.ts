import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStatValueComponent } from './text-stat-value.component';

describe('TextStatValueComponent', () => {
  let component: TextStatValueComponent;
  let fixture: ComponentFixture<TextStatValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextStatValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextStatValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
