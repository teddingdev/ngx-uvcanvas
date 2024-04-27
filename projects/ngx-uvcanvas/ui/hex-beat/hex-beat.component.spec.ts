import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexBeatComponent } from './hex-beat.component';

describe('HexBeatComponent', () => {
  let component: HexBeatComponent;
  let fixture: ComponentFixture<HexBeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HexBeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HexBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
