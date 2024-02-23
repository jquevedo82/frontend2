import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodoPruebaComponent } from './periodo-prueba/periodo-prueba.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    PeriodoPruebaComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ComponentesModule,
  ]
})
export class PersonalModule { }
