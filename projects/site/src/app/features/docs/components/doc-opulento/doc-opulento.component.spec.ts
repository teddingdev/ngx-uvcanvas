import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocOpulentoComponent } from './doc-opulento.component';

describe('OpulentoComponent', () => {
  let component: DocOpulentoComponent;
  let fixture: ComponentFixture<DocOpulentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocOpulentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocOpulentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
