import { TestBed, inject } from '@angular/core/testing';

import { MorgothService } from './morgoth.service';

describe('MorgothService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MorgothService]
    });
  });

  it('should be created', inject([MorgothService], (service: MorgothService) => {
    expect(service).toBeTruthy();
  }));
});
