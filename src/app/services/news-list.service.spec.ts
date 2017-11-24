import { TestBed, inject } from '@angular/core/testing';

import { NewsListService } from './news-list.service';

describe('NewsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsListService]
    });
  });

  it('should be created', inject([NewsListService], (service: NewsListService) => {
    expect(service).toBeTruthy();
  }));
});
