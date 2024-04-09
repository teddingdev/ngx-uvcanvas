import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelustroComponent } from './velustro.component';

describe('VelustroComponent', () => {
  let component: VelustroComponent;
  let fixture: ComponentFixture<VelustroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VelustroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VelustroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
