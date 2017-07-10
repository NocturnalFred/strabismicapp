/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EyeGameDescComponent } from './eye-game-desc.component';

describe('EyeGameDescComponent', () => {
  let component: EyeGameDescComponent;
  let fixture: ComponentFixture<EyeGameDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyeGameDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyeGameDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
