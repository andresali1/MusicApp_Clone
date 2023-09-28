import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { SessionGuard } from './session.guard';
import { RouterTestingModule } from '@angular/router/testing';

//TODO: Is the name of the test "SessionGuard Exam"
describe('Testing of Session Guard 👍', () => {
  let guard: SessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(SessionGuard);
  });

  //TODO: The first question of the test
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
