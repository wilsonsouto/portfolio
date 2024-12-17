import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSpanComponent } from './date-span.component';

describe('DateSpanComponent', () => {
  let component: DateSpanComponent;
  let fixture: ComponentFixture<DateSpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateSpanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
