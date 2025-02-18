import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTripsComponent } from './generate-trips.component';

describe('GenerateTripsComponent', () => {
  let component: GenerateTripsComponent;
  let fixture: ComponentFixture<GenerateTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateTripsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
