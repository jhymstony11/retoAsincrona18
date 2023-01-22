import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto18Component } from './reto18.component';

describe('Reto18Component', () => {
  let component: Reto18Component;
  let fixture: ComponentFixture<Reto18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reto18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reto18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
