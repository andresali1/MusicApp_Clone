import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as mockRaw from '../../../data/user.json';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy: { post: jasmine.Spy }
  let cookieServiceMock: jasmine.SpyObj<CookieService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(httpClientSpy as any, cookieServiceMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});