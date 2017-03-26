/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OurStuffService } from './our-stuff.service';

describe('OurStuffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OurStuffService]
    });
  });

  it('should ...', inject([OurStuffService], (service: OurStuffService) => {
    expect(service).toBeTruthy();
  }));
});
