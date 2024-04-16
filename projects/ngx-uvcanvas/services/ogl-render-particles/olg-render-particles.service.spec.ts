import { TestBed } from '@angular/core/testing';

import { OlgRenderParticlesService } from './olg-render-particles.service';

describe('OlgRenderParticlesService', () => {
  let service: OlgRenderParticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlgRenderParticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
