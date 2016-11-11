/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoopBackComponent } from './loop-back.component';

describe('LoopBackComponent', () => {
  let component: LoopBackComponent;
  let fixture: ComponentFixture<LoopBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
