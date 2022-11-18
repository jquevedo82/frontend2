import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { interceptorProviders } from './interceptor/cliente.interceptor';
import { MaterialModule } from './material/material.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NopageFoundComponent],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [HttpClientModule,MaterialModule,FormsModule],
  providers: [interceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
