import { TestBed } from '@angular/core/testing';

import { StudentListResolver } from './student-list.resolver';

describe('StudentListResolver', () => {
  let resolver: StudentListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StudentListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
