import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocNavComponent } from './doc-nav.component';

describe('DocNavComponent', () => {
  let component: DocNavComponent;
  let fixture: ComponentFixture<DocNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
