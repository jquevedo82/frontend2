import { Component, OnInit } from '@angular/core';

import { ClienteService } from 'src/app/pages/cliente/services/cliente.service';
import { TableColumn } from '../tabla/models/table-column';
import { TableConfig } from '../tabla/models/table-configs';

@Component({
  selector: 'app-busqueda-cliente',
  templateUrl: './busqueda-cliente2.component.html',
  styleUrls: ['./busqueda-cliente2.component.css']
})
//62ae3252 key
export class BusquedaClienteComponent implements OnInit {
  /*title = 'Buscador de Cliente';
  clientes: string[] = [
    'Jose Quevedo', 'Pedro Juan', 'Juan Somoza', 'Facundo Pisani', 'Sergio Flores', 'Oscar Dominguez'
  ];*/


  //control = new FormControl('');
  //filClientes!: Observable<string[]>;

  //public data$: Operadores[] = [];
 // public page: number = 0;


  filtrado = '';

  public data$: any=[];

  tableColumns : TableColumn[] = [];

  tableConfig : TableConfig = {
    isSelectable: true,
    optionsPag: [5,10,20],
  };
  //public operadores : Operadores[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
   /* this.filClientes = this.control.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      map( valor  => this._filter(valor!))
    );
    this.getMovies('');*/
    this.setTableColumns();
  }
  setTableColumns(){
    this.tableColumns =[
      {label:'denominacion', def:'denominacion', dataKey:'denominacion'},
      {label:'entidad', def:'entidad', dataKey:'entidad'},
      {label:'codigo', def:'codigo', dataKey:'codigo'/*,dataType:'date',formatt:'dd MM yyyy'*/},
      {label:'domicilio', def:'domicilio', dataKey:'domicilio' },
      //{label:'domicilio', def:'domicilio', dataKey:'domicilio.name' , dataType:'object'},
    ]
  }
 onSelect(data: any){
    console.log(data);
  }
/*
  private _filter(val: string): string[]{
    const formatVal = val.toLocaleLowerCase();



    return this.clientes.filter( cliente => cliente.toLocaleLowerCase().indexOf(formatVal) === 0);

  }
  */
  getMovies(search: string){
    //this.page=0;
    if(search.length < 3){ return;}

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
/*
  nextPage(){
    this.page+=15;
  }
  previusPage(){
    if(this.page > 0)
      this.page-=15;
  }*/
}
