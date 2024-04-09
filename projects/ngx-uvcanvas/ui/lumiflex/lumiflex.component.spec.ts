import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LumiflexComponent } from './lumiflex.component';

describe('LumiflexComponent', () => {
  let component: LumiflexComponent;
  let fixture: ComponentFixture<LumiflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LumiflexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LumiflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
