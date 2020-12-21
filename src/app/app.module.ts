import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AlertsComponent } from './alerts/alerts.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsContainerComponent } from './items-container/items-container.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ModalComponent,
    NavbarComponent,
    SignupComponent,
    SigninComponent,
    AlertsComponent,
    LandingPageComponent,
    ItemsContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: []
})
export class AppModule {}
