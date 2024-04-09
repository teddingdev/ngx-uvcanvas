import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovatrixComponent } from './novatrix.component';

describe('NovatrixComponent', () => {
  let component: NovatrixComponent;
  let fixture: ComponentFixture<NovatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovatrixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
