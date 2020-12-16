import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ModalComponent,
    NavbarComponent,
    SignupComponent,
    SigninComponent,
    AlertsComponent
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule, ReactiveFormsModule],
  providers: []
})
export class AppModule {}
