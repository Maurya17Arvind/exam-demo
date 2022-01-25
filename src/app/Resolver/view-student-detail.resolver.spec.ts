import { TestBed } from '@angular/core/testing';

import { ViewStudentDetailResolver } from './view-student-detail.resolver';

describe('ViewStudentDetailResolver', () => {
  let resolver: ViewStudentDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewStudentDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
