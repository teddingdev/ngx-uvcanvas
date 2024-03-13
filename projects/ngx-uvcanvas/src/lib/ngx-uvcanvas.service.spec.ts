import { TestBed } from '@angular/core/testing';

import { NgxUvcanvasService } from './ngx-uvcanvas.service';

describe('NgxUvcanvasService', () => {
  let service: NgxUvcanvasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUvcanvasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
