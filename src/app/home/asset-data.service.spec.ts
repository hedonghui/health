import { TestBed, inject } from '@angular/core/testing';

import { AssetDataService } from './asset-data.service';

describe('AssetDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssetDataService]
    });
  });

  it('should be created', inject([AssetDataService], (service: AssetDataService) => {
    expect(service).toBeTruthy();
  }));
});
