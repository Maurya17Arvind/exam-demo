import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExamForStudentComponent } from './all-exam-for-student.component';

describe('AllExamForStudentComponent', () => {
  let component: AllExamForStudentComponent;
  let fixture: ComponentFixture<AllExamForStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllExamForStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExamForStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
