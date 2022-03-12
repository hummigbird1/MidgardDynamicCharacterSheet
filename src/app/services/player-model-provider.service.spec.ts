import { TestBed } from '@angular/core/testing';

import { PlayerModelProviderService } from './player-model-provider.service';

describe('PlayerModelProviderService', () => {
  let service: PlayerModelProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerModelProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
