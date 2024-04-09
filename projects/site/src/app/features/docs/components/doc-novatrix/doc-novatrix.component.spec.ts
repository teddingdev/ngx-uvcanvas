import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocNovatrixComponent } from './doc-novatrix.component';

describe('NovatrixComponent', () => {
  let component: DocNovatrixComponent;
  let fixture: ComponentFixture<DocNovatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocNovatrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocNovatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
