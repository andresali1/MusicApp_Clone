import { inject } from "@angular/core"
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

/**
 * Session Guard Function
 * @returns 
 */
export const sessionGuardFunctional = ():boolean => {
    const cookieService = inject(CookieService);
    const router = inject(Router);

    try{
        const tokenExists = cookieService.check('token');
        if(!tokenExists){
          router.navigate(['/auth']);
        }
        
        return tokenExists;      
      } catch(e) {
        console.log('Algo sucedió 🖐️🖐️🖐️', e);
        return false;
      }
}