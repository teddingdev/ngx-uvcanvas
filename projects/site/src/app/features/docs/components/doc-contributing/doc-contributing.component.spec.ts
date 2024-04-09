import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocContributingComponent } from './doc-contributing.component';

describe('DocContributingComponent', () => {
  let component: DocContributingComponent;
  let fixture: ComponentFixture<DocContributingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocContributingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocContributingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
