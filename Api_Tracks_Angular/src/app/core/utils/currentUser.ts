import { inject } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

export const currentUser = (): { [key: string]: string } => {
    const cookieService = inject(CookieService);
    const token = cookieService.get("token") as string;

    return { email: "test@contact.com", id: "123", role: "admin", token };
}