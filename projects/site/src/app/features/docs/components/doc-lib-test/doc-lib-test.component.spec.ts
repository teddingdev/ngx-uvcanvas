import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocLibTestComponent } from './doc-lib-test.component';

describe('DocLibTestComponent', () => {
  let component: DocLibTestComponent;
  let fixture: ComponentFixture<DocLibTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocLibTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocLibTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
