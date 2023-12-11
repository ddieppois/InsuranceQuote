import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceQuoteResponseComponent } from './insurance-quote-response.component';

describe('InsuranceQuoteResponseComponent', () => {
  let component: InsuranceQuoteResponseComponent;
  let fixture: ComponentFixture<InsuranceQuoteResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceQuoteResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsuranceQuoteResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
