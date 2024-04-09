import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocZenithoComponent } from './doc-zenitho.component';

describe('ZenithoComponent', () => {
  let component: DocZenithoComponent;
  let fixture: ComponentFixture<DocZenithoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocZenithoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocZenithoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
