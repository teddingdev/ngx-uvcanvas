import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAuthorComponent } from './doc-author.component';

describe('DocAuthorComponent', () => {
  let component: DocAuthorComponent;
  let fixture: ComponentFixture<DocAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocAuthorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
