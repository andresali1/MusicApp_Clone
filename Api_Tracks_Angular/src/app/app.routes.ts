import { Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { sessionGuardFunctional } from '@core/guards/sessionV2.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import(`./modules/auth/auth.routes`).then(m => m.authRoutes)
  },
  { //TODO: '' sería la ruta raíz a la que se llegará
    path: '',
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.routes`).then(m => m.homeRoutes),
    canActivate: [sessionGuardFunctional]
  }
];