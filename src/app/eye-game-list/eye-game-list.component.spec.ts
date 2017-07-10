/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EyeGameListComponent } from './eye-game-list.component';

describe('EyeGameListComponent', () => {
  let component: EyeGameListComponent;
  let fixture: ComponentFixture<EyeGameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyeGameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyeGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
