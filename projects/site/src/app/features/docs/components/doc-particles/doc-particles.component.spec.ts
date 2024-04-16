import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocParticlesComponent } from './doc-particles.component';

describe('DocParticlesComponent', () => {
  let component: DocParticlesComponent;
  let fixture: ComponentFixture<DocParticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocParticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocParticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
