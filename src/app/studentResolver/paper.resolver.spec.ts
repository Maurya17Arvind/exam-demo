import { TestBed } from '@angular/core/testing';

import { PaperResolver } from './paper.resolver';

describe('PaperResolver', () => {
  let resolver: PaperResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PaperResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
