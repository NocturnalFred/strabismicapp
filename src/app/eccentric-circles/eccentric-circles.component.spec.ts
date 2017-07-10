/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EccentricCirclesComponent } from './eccentric-circles.component';

describe('EccentricCirclesComponent', () => {
  let component: EccentricCirclesComponent;
  let fixture: ComponentFixture<EccentricCirclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EccentricCirclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EccentricCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
