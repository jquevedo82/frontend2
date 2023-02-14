import { Component, OnInit } from '@angular/core';

import { ClienteService } from 'src/app/pages/cliente/services/cliente.service';
import { BusquedaService } from '../busqueda/services/busqueda.service';

import { TableColumn } from '../tabla/models/table-column';
import { TableConfig } from '../tabla/models/table-configs';

@Component({
  selector: 'app-busqueda-cliente',
  templateUrl: './busqueda-cliente2.component.html',
  styleUrls: ['./busqueda-cliente2.component.css'],
})
export class BusquedaClienteComponent implements OnInit {
  filtrado = '';

  public data$: any = [];

  tableColumns: TableColumn[] = [];

  tableConfig: TableConfig = {
    isSelectable: true,
    optionsPag: [5, 10, 20],
  };


  constructor(private clienteService: ClienteService,private busquedaService: BusquedaService) {}

  ngOnInit(): void {
    this.setTableColumns();
  }
  setTableColumns() {
    this.tableColumns = [
      { label: 'denominacion', def: 'denominacion', dataKey: 'denominacion' },
      { label: 'entidad', def: 'entidad', dataKey: 'entidad' },
      {
        label: 'codigo',
        def: 'codigo',
        dataKey: 'codigo' /*,dataType:'date',formatt:'dd MM yyyy'*/,
      },
      { label: 'domicilio', def: 'domicilio', dataKey: 'domicilio' },
      //{label:'domicilio', def:'domicilio', dataKey:'domicilio.name' , dataType:'object'},
    ];
  }
  onSelect(data: any) {
    console.log(data);
  }


  getMovies(search: string) {
    //this.page=0;
    if (search.length < 3) {
      return;
    }
    //this.busquedaService.lista2(search.toUpperCase());
      this.clienteService.lista2(search.toUpperCase()).subscribe((data) => {
      //console.log(data);
      this.data$ = data;
    });
  }
}
