import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocChangelogComponent } from './doc-changelog.component';

describe('DocChangelogComponent', () => {
  let component: DocChangelogComponent;
  let fixture: ComponentFixture<DocChangelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocChangelogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocChangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
