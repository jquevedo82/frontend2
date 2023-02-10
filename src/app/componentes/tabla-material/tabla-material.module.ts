import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaMaterialComponent } from './tabla-material.component';



@NgModule({
  declarations: [
    TablaMaterialComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TablaMaterialComponent
  ]
})
export class TablaMaterialModule { }
