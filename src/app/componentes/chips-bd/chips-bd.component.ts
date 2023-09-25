// import { COMMA, ENTER } from '@angular/cdk/keycodes';
// import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
// import { MatChipInputEvent } from '@angular/material/chips';
// import { map, Observable, startWith } from 'rxjs';

// @Component({
//   selector: 'app-chipsbd',
//   templateUrl: './chips-bd.component.html',
//   styleUrls: ['./chips-bd.component.css'],
// })
// export class ChipsBdComponent implements OnInit {
//   separatorKeysCodes: number[] = [ENTER, COMMA];
//   opcionCtrl = new FormControl('');

//   data$?: any[];

//   opcionesfiltradas: any;

//   opciones_seleccionadas: any = [];

//   opciones: any = [ ];

//   constructor() {

//   }

//   ngOnInit(): void {

//     this.opciones = this.data$;
//     this.opcionesfiltradas=this.opciones;
//     //console.log(this.opcionCtrl);
//   }
//   @Input() set setData(data: any[]) {
//     //this.data$ = data;
//     this.data$ = data;
//   }

//   @ViewChild('opcionInput') opcionInput!: ElementRef<HTMLInputElement>;

//   @Output() selecionadas: EventEmitter<any> = new EventEmitter()

//   selected(event: MatAutocompleteSelectedEvent): void {
//     // let d1=event.option.value.codigo;
//     var item = {};
//     item = event.option.value;
//     this.opciones_seleccionadas.push(item);

//     const index = this.opciones.indexOf(item);
//     this.opciones.splice(index, 1);

//     /*const index2= this.opcionesfiltradas.indexOf(item);
//     this.opcionesfiltradas.splice(index2, 1);*/

//     //console.log(this.opciones);
//     //console.log(this.opciones_seleccionadas);
//     this.prueba();

//     console.log(this.opciones);
//     console.log(this.opcionesfiltradas);

//   }
//   remove(opcion: any): void {
//     var item = {};
//     item = opcion;

//     this.opciones.push(item);
//     //this.opcionesfiltradas.push(item);

//     const index = this.opciones_seleccionadas.indexOf(item);
//     this.opciones_seleccionadas.splice(index, 1);

//     //console.log(this.opciones_seleccionadas);
//     //console.log(this.opciones);

//     this.prueba();

//     }

//   filtro(value:any): void{
//     const filterValue = value.toLowerCase();

//     let xx=this.opciones.filter((opcion: { denominacion: string; }) =>
//       opcion.denominacion.toLowerCase().includes(filterValue)
//     );

//     this.opcionesfiltradas=xx;

//   }

//   prueba() {
//     this.selecionadas.emit(this.opciones_seleccionadas);
//   }
// }

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatLegacyAutocompleteSelectedEvent as MatAutocompleteSelectedEvent } from '@angular/material/legacy-autocomplete';
import { MatLegacyChipInputEvent as MatChipInputEvent } from '@angular/material/legacy-chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-chipsbd',
  templateUrl: './chips-bd.component.html',
  styleUrls: ['./chips-bd.component.css'],
})
export class ChipsBdComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  opcionCtrl = new FormControl('');

  opcionesfiltradas: Observable<string[]>;

  opciones_seleccionadas: string[] = [];

  //allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  opciones: string[] = [];

  opciones1: any = [];
  

  constructor() {
    this.opcionesfiltradas = this.opcionCtrl.valueChanges.pipe(
      startWith(null),
      map((val: string | null) =>
        val ? this._filter(val) : this.opciones.slice()
      )
    );
  }

  ngOnInit() {}
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.opciones_seleccionadas.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.opcionCtrl.setValue(null);
  }

  @Input() set setData(data: any[]) {
    //this.data$ = data;
    this.opciones1 = data;
    this.opciones1.map((opc: { denominacion: string }) =>
      this.opciones.push(opc.denominacion)
    );
    console.log(this.opciones);
  }
  @ViewChild('opcionInput') opcionInput!: ElementRef<HTMLInputElement>;

  @Output() selecionadas: EventEmitter<any> = new EventEmitter();
  remove(opcion: string): void {
    const index = this.opciones_seleccionadas.indexOf(opcion);

    if (index >= 0) {
      this.opciones_seleccionadas.splice(index, 1);
    }
    this.opciones.push(opcion);
    this.opcionesfiltradas = this.opcionCtrl.valueChanges.pipe(
      startWith(null),
      map((val: string | null) =>
        val ? this._filter(val) : this.opciones.slice()
      )
    );
    this.opcionInput.nativeElement.value = '';
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const index = this.opciones.indexOf(event.option.viewValue);
    if (index >= 0) {
      this.opciones.splice(index, 1);
    }

    this.opciones_seleccionadas.push(event.option.viewValue);
    this.opcionInput.nativeElement.value = '';
    this.opcionCtrl.setValue(null);
    this.prueba();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.opciones.filter((opcion) =>
      opcion.toLowerCase().includes(filterValue)
    );
  }
  prueba() {
   let  resp: any = [];
    this.opciones1.map((opc: { denominacion: string }) => {
      this.opciones_seleccionadas.map((val) =>
        val == opc.denominacion ? resp.push(opc) : ''
      );
    });

    this.selecionadas.emit(resp);
  }
}
