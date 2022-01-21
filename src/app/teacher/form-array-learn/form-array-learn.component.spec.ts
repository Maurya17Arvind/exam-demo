import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayLearnComponent } from './form-array-learn.component';

describe('FormArrayLearnComponent', () => {
  let component: FormArrayLearnComponent;
  let fixture: ComponentFixture<FormArrayLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
