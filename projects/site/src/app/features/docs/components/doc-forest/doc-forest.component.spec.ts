import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocForestComponent } from './doc-forest.component';

describe('DocFogComponent', () => {
  let component: DocForestComponent;
  let fixture: ComponentFixture<DocForestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocForestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
