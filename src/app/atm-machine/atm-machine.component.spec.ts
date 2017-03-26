/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AtmMachineComponent } from './atm-machine.component';

describe('AtmMachineComponent', () => {
  let component: AtmMachineComponent;
  let fixture: ComponentFixture<AtmMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
