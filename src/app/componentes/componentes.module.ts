import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { MaterialModule } from '../material/material.module';
import { ChipsComponent } from './chips/chips.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BusquedaClienteComponent } from './busqueda-cliente2/busqueda-cliente2.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TabsComponent,
    ChipsComponent,
    BusquedaComponent,
    BusquedaClienteComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    
  ],
  exports: [
    TabsComponent,
    ChipsComponent,
    BusquedaComponent,
    BusquedaClienteComponent,
    FilterPipe
  ]
})
export class ComponentesModule { }
