import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericValueHandlerComponent } from './numeric-value-handler.component';

describe('NumericValueHandlerComponent', () => {
  let component: NumericValueHandlerComponent;
  let fixture: ComponentFixture<NumericValueHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericValueHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericValueHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
