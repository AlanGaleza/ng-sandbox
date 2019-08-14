import { TestBed } from '@angular/core/testing';

import { TestFormService } from './test-form.service';

describe('TestFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestFormService = TestBed.get(TestFormService);
    expect(service).toBeTruthy();
  });
});
