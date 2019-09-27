import { TestBed } from '@angular/core/testing';

import { AddBookDeactivateService } from './add-book-deactivate.service';

describe('AddBookDeactivateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddBookDeactivateService = TestBed.get(AddBookDeactivateService);
    expect(service).toBeTruthy();
  });
});
