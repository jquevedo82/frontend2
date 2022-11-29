import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, Observable, startWith } from 'rxjs';
import { ClienteService } from 'src/app/pages/cliente/services/cliente.service';

@Component({
  selector: 'app-busqueda-cliente',
  templateUrl: './busqueda-cliente.component.html',
  styleUrls: ['./busqueda-cliente.component.css']
})
//62ae3252 key
export class BusquedaClienteComponent implements OnInit {
  title = 'Buscador de Cliente';
  clientes: string[] = [
    'Jose Quevedo', 'Pedro Juan', 'Juan Somoza', 'Facundo Pisani', 'Sergio Flores', 'Oscar Dominguez'
  ];

  control = new FormControl('');
  filClientes!: Observable<string[]>;
  

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.filClientes = this.control.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      map( valor  => this._filter(valor!))
    );
  }

  private _filter(val: string): string[]{
    const formatVal = val.toLocaleLowerCase();
    
    return this.clientes.filter( cliente => cliente.toLocaleLowerCase().indexOf(formatVal) === 0);

  }
  getMovies(search: string){
    this.clienteService.peliculas(search).subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
