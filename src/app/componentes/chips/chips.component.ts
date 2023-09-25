import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatLegacyAutocompleteSelectedEvent as MatAutocompleteSelectedEvent } from '@angular/material/legacy-autocomplete';
import { MatLegacyChipInputEvent as MatChipInputEvent } from '@angular/material/legacy-chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ChipsComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  opcionCtrl = new FormControl('');
  
  opcionesfiltradas: Observable<string[]>;
  opcionesfiltradas1:any;

  opciones_seleccionadas: string[] = [];
  opciones_seleccionadas1: any;
  //allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  opciones: string[] = [
    'Promo 15',
    'Promo 25',
    'Promo 23',
    'Promo 14',
    'Promo 52',
  ];
  opciones1: any = [
    { descripcion: 'Promo 15', codigo: '01' },
    { descripcion: 'Promo 25', codigo: '02' },
    { descripcion: 'Promo 23', codigo: '03' },
    { descripcion: 'Promo 14', codigo: '04' },
    { descripcion: 'Promo 52', codigo: '05' },
  ];

  @ViewChild('opcionInput') opcionInput!: ElementRef<HTMLInputElement>;

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
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const index = this.opciones.indexOf(event.option.viewValue);
    if (index >= 0) {
      this.opciones.splice(index, 1);
    }

    this.opciones_seleccionadas.push(event.option.viewValue);
    this.opcionInput.nativeElement.value = '';
    this.opcionCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.opciones.filter((opcion) =>
      opcion.toLowerCase().includes(filterValue)
    );
  }
}

