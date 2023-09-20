import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { NuevoUsuarioComponent } from './Componentes/nuevo-usuario/nuevo-usuario.component';
import { ListarUsuarioComponent } from './Componentes/listar-usuario/listar-usuario.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { FormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './Componentes/editar-usuario/editar-usuario.component';



@NgModule({
  declarations: [
    NuevoUsuarioComponent,
    ListarUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    UsuarioRoutingModule,
    CommonModule,
    FormsModule,
    ComponentesModule,
    MaterialModule,
  ],
  exports: [],
})
export class UsuarioModule {



}
