import { TestBed } from '@angular/core/testing';

import { MediaChangeService } from './media-change.service';

describe('MediaChangeService', () => {
  let service: MediaChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
