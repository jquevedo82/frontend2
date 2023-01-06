import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, Observable, startWith } from 'rxjs';
import { Operadores } from 'src/app/models/operadores';
import { ClienteService } from 'src/app/pages/cliente/services/cliente.service';

@Component({
  selector: 'app-busqueda-cliente',
  templateUrl: './busqueda-cliente2.component.html',
  styleUrls: ['./busqueda-cliente2.component.css']
})
//62ae3252 key
export class BusquedaClienteComponent implements OnInit {
  title = 'Buscador de Cliente';
  clientes: string[] = [
    'Jose Quevedo', 'Pedro Juan', 'Juan Somoza', 'Facundo Pisani', 'Sergio Flores', 'Oscar Dominguez'
  ];
  

  control = new FormControl('');
  filClientes!: Observable<string[]>;

  public data$: Operadores[] = [];
  public page: number = 0;


  filtrado = '';
  //public data$: any;
  //public operadores : Operadores[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.filClientes = this.control.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      map( valor  => this._filter(valor!))
    );
    this.getMovies('');
  }

  private _filter(val: string): string[]{
    const formatVal = val.toLocaleLowerCase();
    
    

    return this.clientes.filter( cliente => cliente.toLocaleLowerCase().indexOf(formatVal) === 0);

  }
  getMovies(search: string){
    this.page=0;
    if(search.length < 3)return;
    this.clienteService.lista2(search.toUpperCase())
    /*.pipe(
      debounceTime(500),
     // startWith(''),
     //map(valor => valor)
      
    );    
    */

    .subscribe(
      data => {
        //console.log(data);
        this.data$=data;
        //this.filClientes = this.clientes.filter( data => data.toLocaleLowerCase());
      }
    )
  }

  nextPage(){
    this.page+=15;
  }
  previusPage(){
    if(this.page > 0)
      this.page-=15;
  }
}
