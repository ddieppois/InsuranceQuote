import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousQuotesComponent } from './previous-quotes.component';

describe('PreviousQuotesComponent', () => {
  let component: PreviousQuotesComponent;
  let fixture: ComponentFixture<PreviousQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousQuotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviousQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
