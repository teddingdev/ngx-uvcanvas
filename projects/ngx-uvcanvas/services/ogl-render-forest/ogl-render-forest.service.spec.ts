import { TestBed } from '@angular/core/testing';

import { OglRenderForestService } from './ogl-render-forest.service';

describe('OglRenderForestService', () => {
  let service: OglRenderForestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OglRenderForestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
