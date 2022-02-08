import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panell2Component } from './panell2.component';

describe('Panell2Component', () => {
  let component: Panell2Component;
  let fixture: ComponentFixture<Panell2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panell2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Panell2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
