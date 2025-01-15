import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterOutlet } from '@angular/router';
import { ContexteComponent } from './contexte/contexte.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    UserManagerComponent,
    NavbarComponent,
    HomepageComponent,
    ContexteComponent
  ],
  imports: [
    FormsModule,
    RouterOutlet,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}