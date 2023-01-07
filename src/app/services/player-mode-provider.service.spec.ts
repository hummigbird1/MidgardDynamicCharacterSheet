import { TestBed } from '@angular/core/testing';

import { PlayerModeProviderService } from './player-mode-provider.service';

describe('PlayerModeProviderService', () => {
  let service: PlayerModeProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerModeProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
