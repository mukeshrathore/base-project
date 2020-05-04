import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTE_CONSTANTS } from './shared/constants/route-constants';
import { AppComponent } from './app.component';
import { AccessDeniedComponent } from './core/route-error-handlers/access-denied/access-denied.component';
import { SessionTimeoutComponent } from './core/route-error-handlers/session-timeout/session-timeout.component';
import { PageNotFoundComponent } from './core/route-error-handlers/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: ROUTE_CONSTANTS.DEFAULT_ROUTE,
    redirectTo: ROUTE_CONSTANTS.DEFAULT_ROUTE,
    pathMatch: ROUTE_CONSTANTS.PATH_MATCH_FULL
  },
  {
    path: ROUTE_CONSTANTS.DEFAULT_ROUTE,
    component: AppComponent
  },
  {
    path: ROUTE_CONSTANTS.ACCESS_DENIED_ROUTE,
    component: AccessDeniedComponent
  },
  {
    path: ROUTE_CONSTANTS.SESSION_TIMEOUT,
    component: SessionTimeoutComponent
  },
  {
    path: ROUTE_CONSTANTS.WILDCARD_ROUTE,
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
