import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { SessionLayoutComponent } from './layouts/session-layout/session-layout.component';
import { AppRoutes } from './config/routes/app.routing';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppLayoutComponent,
    SessionLayoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
