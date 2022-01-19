import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyStudentDataComponent } from './verify-student-data.component';

describe('VerifyStudentDataComponent', () => {
  let component: VerifyStudentDataComponent;
  let fixture: ComponentFixture<VerifyStudentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyStudentDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyStudentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
