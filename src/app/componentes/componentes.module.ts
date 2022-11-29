import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { MaterialModule } from '../material/material.module';
import { ChipsComponent } from './chips/chips.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BusquedaClienteComponent } from './busqueda-cliente/busqueda-cliente.component';

@NgModule({
  declarations: [
    TabsComponent,
    ChipsComponent,
    BusquedaComponent,
    BusquedaClienteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
  exports: [
    TabsComponent,
    ChipsComponent,
    BusquedaComponent,
    BusquedaClienteComponent
    
  ]
})
export class ComponentesModule { }
