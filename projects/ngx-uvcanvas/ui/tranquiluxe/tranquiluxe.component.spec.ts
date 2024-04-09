import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranquiluxeComponent } from './tranquiluxe.component';

describe('TranquiluxeComponent', () => {
  let component: TranquiluxeComponent;
  let fixture: ComponentFixture<TranquiluxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranquiluxeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranquiluxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
