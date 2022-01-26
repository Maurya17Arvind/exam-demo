import { TestBed } from '@angular/core/testing';

import { VerifyStudentResolver } from './verify-student.resolver';

describe('VerifyStudentResolver', () => {
  let resolver: VerifyStudentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(VerifyStudentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
