import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodoPruebaComponent } from './periodo-prueba/periodo-prueba.component';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal.component';

const routes: Routes = [
  { path: 'personal', component: PersonalComponent, data: { titulo: 'Personal', urltitulo:'no'} },
  { path: 'periodo-prueba', component: PeriodoPruebaComponent, data: { titulo: 'Personal', urltitulo:'/personal', Subtitulo: 'Periodo Prueba'} },
  { path: '**', redirectTo: 'personal' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PersonalRoutingModule { }
