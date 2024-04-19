import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTestComponent } from './lib-test.component';

describe('LibTestComponent', () => {
  let component: LibTestComponent;
  let fixture: ComponentFixture<LibTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
