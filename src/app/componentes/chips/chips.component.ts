import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  opcionCtrl = new FormControl('');
  opcionesfiltradas: Observable<string[]>;
  opciones_seleccionadas: string[]=[];
  //allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  opciones: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('opcionInput') opcionInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.opcionesfiltradas = this.opcionCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.opciones.slice())),
    );
  }

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
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.opciones_seleccionadas.push(event.option.viewValue);
    this.opcionInput.nativeElement.value = '';
    this.opcionCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.opciones.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}
