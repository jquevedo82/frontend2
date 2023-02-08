import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { MaterialModule } from '../material/material.module';
import { ChipsComponent } from './chips/chips.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BusquedaClienteComponent } from './busqueda-cliente2/busqueda-cliente2.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { PaginadorMaterialComponent } from './paginador-material/paginador-material.component';
import { TablaMaterialComponent } from './tabla/tabla-material/tabla-material.component';
import { ColumnValuePipe } from './tabla/pipes/column-value.pipe';
import { TablaSeleccionComponent } from './tabla/tabla-seleccion/tabla-seleccion.component';

@NgModule({
  declarations: [
    TabsComponent,
    ChipsComponent,
    BusquedaComponent,
    BusquedaClienteComponent,
    FilterPipe,
    PaginadorMaterialComponent,
    TablaMaterialComponent,
    ColumnValuePipe,
    TablaSeleccionComponent
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
    FilterPipe,
    PaginadorMaterialComponent,
    TablaMaterialComponent,
    TablaSeleccionComponent
    //ColumnValuePipe
  ]
})
export class ComponentesModule { }
