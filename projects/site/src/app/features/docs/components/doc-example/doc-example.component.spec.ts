import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocExampleComponent } from './doc-example.component';

describe('DocExampleComponent', () => {
  let component: DocExampleComponent;
  let fixture: ComponentFixture<DocExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
