import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAllPreviewComponent } from './doc-all-preview.component';

describe('DocAllPreviewComponent', () => {
  let component: DocAllPreviewComponent;
  let fixture: ComponentFixture<DocAllPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocAllPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocAllPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
