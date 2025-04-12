import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get code contain login', () => {
    expect(service.GetCode()).toContain("https://login");
  });

  it('should get code contain login', () => {
    expect(service.GetCode()).toContain("https://login");
  });
});
