import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUvcanvasComponent } from './ngx-uvcanvas.component';

describe('NgxUvcanvasComponent', () => {
  let component: NgxUvcanvasComponent;
  let fixture: ComponentFixture<NgxUvcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxUvcanvasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxUvcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
