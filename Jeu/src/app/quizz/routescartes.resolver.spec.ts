import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { routescartesResolver } from './routescartes.resolver';

describe('routescartesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => routescartesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
