import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { MaterialModule } from '../material/material.module';
import { ChipsComponent } from './chips/chips.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { PaginadorMaterialComponent } from './paginador-material/paginador-material.component';
import { TablaMaterialComponent } from './tabla/tabla-material/tabla-material.component';
import { ColumnValuePipe } from './tabla/pipes/column-value.pipe';
import { TablaSeleccionComponent } from './tabla/tabla-seleccion/tabla-seleccion.component';
import { ModalComponent } from './modal/modal.component';
import { DialogContentExampleDialog} from './busqueda/busqueda.component';
import { ChipsBdComponent } from './chips-bd/chips-bd.component';
import { SelectMComponent } from './select-m/select-m.component';
import { FechaComponent } from './fecha/fecha.component';
import { Busqueda2Component } from './busqueda2/busqueda2.component';

@NgModule({
  declarations: [
    TabsComponent,
    ChipsComponent,
    BusquedaComponent,
    FilterPipe,
    PaginadorMaterialComponent,
    TablaMaterialComponent,
    ColumnValuePipe,
    TablaSeleccionComponent,
    ModalComponent,
    DialogContentExampleDialog,
    ChipsBdComponent,
    SelectMComponent,
    FechaComponent,
    Busqueda2Component,

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
    Busqueda2Component,
    FilterPipe,
    PaginadorMaterialComponent,
    TablaMaterialComponent,
    TablaSeleccionComponent,
    ModalComponent,
    ChipsBdComponent,
    SelectMComponent,
    FechaComponent,
  ]
})
export class ComponentesModule { }
