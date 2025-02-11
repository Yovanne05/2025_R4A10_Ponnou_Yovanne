import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafalgarComponent } from './trafalgar.component';

describe('TrafalgarComponent', () => {
  let component: TrafalgarComponent;
  let fixture: ComponentFixture<TrafalgarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafalgarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafalgarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
