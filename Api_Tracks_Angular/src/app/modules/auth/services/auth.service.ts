import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;

  constructor(
    private httpClient:HttpClient,
    private cookie: CookieService
  ) { }

  public sendCredentials(email:string, password:string): Observable<any> {
    const body = {
      email,
      password
    }

    return this.httpClient.post(`${this.URL}/auth/login`, body)
    .pipe(
      tap((responseOk:any) => { //TODO: Cuando las credenciales son correctas
        const { tokenSession, data } = responseOk;
        this.cookie.set('token', tokenSession, 4, '/');
      }),
      catchError((err) => {
        console.log('Credenciales incorrectas 😱😱😱');
        return of([]);
      })
    );
  }
}
