import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTripsComponent } from './information-trips.component';

describe('InformationTripsComponent', () => {
  let component: InformationTripsComponent;
  let fixture: ComponentFixture<InformationTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationTripsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
