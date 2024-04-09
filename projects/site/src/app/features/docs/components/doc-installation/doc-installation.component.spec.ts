import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocInstallationComponent } from './doc-installation.component';

describe('DocInstallationComponent', () => {
  let component: DocInstallationComponent;
  let fixture: ComponentFixture<DocInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocInstallationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
