import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingPortfolioComponent } from './offering-portfolio.component';

describe('OfferingPortfolioComponent', () => {
  let component: OfferingPortfolioComponent;
  let fixture: ComponentFixture<OfferingPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferingPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
