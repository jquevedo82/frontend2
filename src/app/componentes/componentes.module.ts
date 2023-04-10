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
import { ModalComponent } from './modal/modal.component';
import { DialogContentExampleDialog} from './busqueda/busqueda.component';
import { ChipsBdComponent } from './chips-bd/chips-bd.component';

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
    TablaSeleccionComponent,
    ModalComponent,
    DialogContentExampleDialog,
    ChipsBdComponent,
    
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
    TablaSeleccionComponent,
    ModalComponent,
    ChipsBdComponent,
  ]
})
export class ComponentesModule { }
