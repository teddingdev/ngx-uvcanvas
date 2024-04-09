import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocIntroductionComponent } from './doc-introduction.component';

describe('DocIntroductionComponent', () => {
  let component: DocIntroductionComponent;
  let fixture: ComponentFixture<DocIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocIntroductionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
