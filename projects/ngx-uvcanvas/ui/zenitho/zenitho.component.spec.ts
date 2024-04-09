import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenithoComponent } from './zenitho.component';

describe('ZenithoComponent', () => {
  let component: ZenithoComponent;
  let fixture: ComponentFixture<ZenithoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZenithoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZenithoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
