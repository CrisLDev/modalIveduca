import { TestBed } from '@angular/core/testing';

import { StudentsNEEService } from './students-nee.service';

describe('StudentsNEEService', () => {
  let service: StudentsNEEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsNEEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
