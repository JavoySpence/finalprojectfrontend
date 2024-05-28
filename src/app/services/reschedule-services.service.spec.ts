import { TestBed } from '@angular/core/testing';

import { RescheduleServicesService } from './reschedule-services.service';

describe('RescheduleServicesService', () => {
  let service: RescheduleServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RescheduleServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
