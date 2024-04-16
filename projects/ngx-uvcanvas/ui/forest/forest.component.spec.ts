import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FogComponent } from './forest.component';

describe('FogComponent', () => {
  let component: FogComponent;
  let fixture: ComponentFixture<FogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
