import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-chipsbd',
  templateUrl: './chips-bd.component.html',
  styleUrls: ['./chips-bd.component.css'],
})
export class ChipsBdComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  opcionCtrl = new FormControl('');

  data$?: any[];

  opcionesfiltradas: any;

  opciones_seleccionadas: any = [];

  opciones: any = [ ];

  constructor() {

  }

  ngOnInit(): void {
    
    this.opciones = this.data$;
    this.opcionesfiltradas=this.opciones;
    //console.log(this.opcionCtrl);
  }
  @Input() set setData(data: any[]) {
    //this.data$ = data;
    this.data$ = data;
  }

  @ViewChild('opcionInput') opcionInput!: ElementRef<HTMLInputElement>;

  @Output() selecionadas: EventEmitter<any> = new EventEmitter()

  selected(event: MatAutocompleteSelectedEvent): void {
    // let d1=event.option.value.codigo;
    var item = {};
    item = event.option.value;
    this.opciones_seleccionadas.push(item);

    const index = this.opciones.indexOf(item);
    this.opciones.splice(index, 1);

    //console.log(this.opciones);
    //console.log(this.opciones_seleccionadas);
    this.prueba();
    
  }
  remove(opcion: any): void {
    var item = {};
    item = opcion;
    this.opciones.push(item);

    const index = this.opciones_seleccionadas.indexOf(item);
    this.opciones_seleccionadas.splice(index, 1);

    //console.log(this.opciones_seleccionadas);
    //console.log(this.opciones);

    this.prueba();
  }


  filtro(value:any): void{
    const filterValue = value.toLowerCase();

    let xx=this.opciones.filter((opcion: { denominacion: string; }) =>
      opcion.denominacion.toLowerCase().includes(filterValue)
    );
    this.opcionesfiltradas=xx;

  }

  prueba() {
    this.selecionadas.emit(this.opciones_seleccionadas);
  }
}
