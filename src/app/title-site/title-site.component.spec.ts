import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSiteComponent } from './title-site.component';

describe('TitleSiteComponent', () => {
  let component: TitleSiteComponent;
  let fixture: ComponentFixture<TitleSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
