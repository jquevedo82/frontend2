import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { MaterialModule } from '../material/material.module';
import { ChipsComponent } from './chips/chips.component';

@NgModule({
  declarations: [
    TabsComponent,
    ChipsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
  exports: [
    TabsComponent,
    ChipsComponent
  ]
})
export class ComponentesModule { }
