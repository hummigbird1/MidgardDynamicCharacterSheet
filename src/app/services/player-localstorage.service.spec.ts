import { TestBed } from '@angular/core/testing';

import { PlayerLocalstorageService } from './player-localstorage.service';

describe('PlayerLocalstorageService', () => {
  let service: PlayerLocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerLocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
