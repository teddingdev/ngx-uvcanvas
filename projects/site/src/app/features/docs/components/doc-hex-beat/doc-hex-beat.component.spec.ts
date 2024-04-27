import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocHexBeatComponent } from './doc-hex-beat.component';

describe('DocHexBeatComponent', () => {
  let component: DocHexBeatComponent;
  let fixture: ComponentFixture<DocHexBeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocHexBeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocHexBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
