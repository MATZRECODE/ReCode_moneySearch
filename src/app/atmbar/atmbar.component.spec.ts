/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AtmbarComponent } from './atmbar.component';

describe('AtmbarComponent', () => {
  let component: AtmbarComponent;
  let fixture: ComponentFixture<AtmbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
