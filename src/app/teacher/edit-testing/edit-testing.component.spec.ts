import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestingComponent } from './edit-testing.component';

describe('EditTestingComponent', () => {
  let component: EditTestingComponent;
  let fixture: ComponentFixture<EditTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
