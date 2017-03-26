/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlutterThingsService } from './flutter-things.service';

describe('FlutterThingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlutterThingsService]
    });
  });

  it('should ...', inject([FlutterThingsService], (service: FlutterThingsService) => {
    expect(service).toBeTruthy();
  }));
});
