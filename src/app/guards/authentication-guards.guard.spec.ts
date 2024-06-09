import { TestBed } from '@angular/core/testing';

import { AuthenticationGuardsGuard } from './authentication-guards.guard';

describe('AuthenticationGuardsGuard', () => {
  let guard: AuthenticationGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticationGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
