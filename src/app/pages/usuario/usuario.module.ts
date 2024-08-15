import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { MaterialModule } from 'src/app/material/material.module';

import { NuevoUsuarioComponent } from './Componentes/nuevo-usuario/nuevo-usuario.component';
import { ListarUsuarioComponent } from './Componentes/listar-usuario/listar-usuario.component';
import { EditarUsuarioComponent } from './Componentes/editar-usuario/editar-usuario.component';
import { ModificarUsuarioComponent } from './Componentes/modificar-usuario/modificar-usuario.component';
import { AltaComponent } from './Componentes/Alta/Alta.component';
import { MenuComponent } from './Componentes/menu/menu.component';



@NgModule({
  declarations: [
    NuevoUsuarioComponent,
    ListarUsuarioComponent,
    EditarUsuarioComponent,
    ModificarUsuarioComponent,
    AltaComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    UsuarioRoutingModule,
    ComponentesModule,
  ],
  exports: [],
})
export class UsuarioModule {



}
