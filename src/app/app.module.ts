import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { interceptorProviders } from './interceptor/cliente.interceptor';
import { MaterialModule } from './material/material.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentesModule } from './componentes/componentes.module';
import { FilterPipe } from './pipes/filter.pipe';
import { ColumnValuePipe } from './componentes/tabla/pipes/column-value.pipe';

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
    
  ],
  exports: [HttpClientModule,MaterialModule,FormsModule],
  providers: [interceptorProviders],
  bootstrap: [AppComponent],
  
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
