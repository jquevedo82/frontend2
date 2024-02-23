import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodoPruebaComponent } from './periodo-prueba/periodo-prueba.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'prueba', component: PeriodoPruebaComponent, data: { titulo: 'Personal', urltitulo:'/personal', Subtitulo: 'Periodo Prueba'} },
  { path: '**', redirectTo: 'prueba' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PersonalRoutingModule { }
