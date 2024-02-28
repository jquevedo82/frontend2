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
import { ConfirmationModalComponent } from './componentes/confirmation-modal/confirmation-modal.component';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'dd-MM-yyyy',
  },
  display: {
    dateInput: 'dd-MM-yyyy',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'dd-MM-yyyy',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};
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
  providers: [
    interceptorProviders,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }, // Cambia 'es-ES' por el código de tu idioma si es diferente
  ],
  //{provide: LOCALE_ID, useValue: 'es'} para fecha en español
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
