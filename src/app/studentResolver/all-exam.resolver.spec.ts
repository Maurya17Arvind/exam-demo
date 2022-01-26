import { TestBed } from '@angular/core/testing';

import { AllExamResolver } from './all-exam.resolver';

describe('AllExamResolver', () => {
  let resolver: AllExamResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllExamResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
