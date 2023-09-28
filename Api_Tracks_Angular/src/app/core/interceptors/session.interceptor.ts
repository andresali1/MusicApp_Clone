import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

/**
 * Interceptor Functional Session Add Bearer Token
 * @param request 
 * @param next 
 * @returns 
 */
export const authorizationInterceptor = (request:HttpRequest<unknown>, next:HttpHandlerFn) => {
    const cookieService = inject(CookieService);
    try{
        const token = cookieService.get('token');
  
        let newRequest = request;
        newRequest = request.clone({
          setHeaders: {
            authorization: `Bearer ${token}`
          }
        });
  
        return next(newRequest);
      } catch(e) {
        console.log('Cuidado con el error 💣💣💣💣', e);
        return next(request);
      }
}