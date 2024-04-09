import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocLumiflexComponent } from './doc-lumiflex.component';

describe('LumiflexComponent', () => {
  let component: DocLumiflexComponent;
  let fixture: ComponentFixture<DocLumiflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocLumiflexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocLumiflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
