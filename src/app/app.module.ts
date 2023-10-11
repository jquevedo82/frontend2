import { HttpClientModule } from '@angular/common/http';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  LOCALE_ID,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { interceptorProviders } from './interceptor/cliente.interceptor';
import { MaterialModule } from './material/material.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentesModule } from './componentes/componentes.module';

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
    ComponentesModule,
    ReactiveFormsModule,
  ],
  exports: [HttpClientModule, MaterialModule, FormsModule],
  providers: [interceptorProviders, { provide: LOCALE_ID, useValue: 'es' }],
  //{provide: LOCALE_ID, useValue: 'es'} para fecha en español
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
