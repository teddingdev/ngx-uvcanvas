import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocVelustroComponent } from './doc-velustro.component';

describe('VelustroComponent', () => {
  let component: DocVelustroComponent;
  let fixture: ComponentFixture<DocVelustroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocVelustroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocVelustroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
