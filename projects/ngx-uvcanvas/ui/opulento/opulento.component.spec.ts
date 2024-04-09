import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpulentoComponent } from './opulento.component';

describe('OpulentoComponent', () => {
  let component: OpulentoComponent;
  let fixture: ComponentFixture<OpulentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpulentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpulentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
