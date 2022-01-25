import { TestBed } from '@angular/core/testing';

import { ViewExamDetailResolver } from './view-exam-detail.resolver';

describe('ViewExamDetailResolver', () => {
  let resolver: ViewExamDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewExamDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
