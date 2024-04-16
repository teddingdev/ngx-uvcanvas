import { TestBed } from '@angular/core/testing';

import { OglRenderService } from './ogl-render.service';

describe('OglRenderService', () => {
  let service: OglRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OglRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
