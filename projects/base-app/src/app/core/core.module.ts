import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccessDeniedComponent } from './route-error-handlers/access-denied/access-denied.component';
import { PageNotFoundComponent } from './route-error-handlers/page-not-found/page-not-found.component';
import { SessionTimeoutComponent } from './route-error-handlers/session-timeout/session-timeout.component';



@NgModule({
  declarations: [HeaderComponent, NavbarComponent, FooterComponent, AccessDeniedComponent, PageNotFoundComponent, SessionTimeoutComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
