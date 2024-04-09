import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTranquiluxeComponent } from './doc-tranquiluxe.component';

describe('TranquiluxeComponent', () => {
  let component: DocTranquiluxeComponent;
  let fixture: ComponentFixture<DocTranquiluxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocTranquiluxeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocTranquiluxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
