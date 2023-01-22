import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asincronica18Component } from './asincronica18.component';

describe('Asincronica18Component', () => {
  let component: Asincronica18Component;
  let fixture: ComponentFixture<Asincronica18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asincronica18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asincronica18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
