import { TestBed } from '@angular/core/testing';

import { PhotodetailService } from './photodetail.service';

describe('PhotodetailService', () => {
  let service: PhotodetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotodetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
