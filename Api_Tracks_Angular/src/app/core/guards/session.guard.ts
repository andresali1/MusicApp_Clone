import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(
    private cookieService: CookieService,
    private router:Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkSessionCookie();
  }

  checkSessionCookie(): boolean {
    try{
      const tokenExists = this.cookieService.check('token');
      if(!tokenExists){
        this.router.navigate(['/auth']);
      }
      
      return tokenExists;      
    } catch(e) {
      console.log('Algo sucedió 🖐️🖐️🖐️', e);
      return false;
    }
  }
}
