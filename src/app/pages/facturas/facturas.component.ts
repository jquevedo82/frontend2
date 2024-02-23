import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/componentes/tabla/models/table-column';
import { TableConfig } from 'src/app/componentes/tabla/models/table-configs';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css'],
})
export class FacturasComponent implements OnInit {
  tableColumns: TableColumn[] = [];
  tableColumns2: TableColumn[] = [];
  dato2:any='jj';
  constructor() {}

  ngOnInit(): void {
    this.setTableColumns();
  }
  setTableColumns() {
    this.tableColumns = [
      {
        label: 'codigo',
        def: 'codigo',
        dataKey: 'codigo' /*,dataType:'date',formatt:'dd MM yyyy'*/,
      },
      { label: 'denominacion', def: 'denominacion', dataKey: 'denominacion' },
     // { label: 'entidad', def: 'entidad', dataKey: 'entidad' },

      { label: 'cuit', def: 'cuit', dataKey: 'cuit' },
      //{label:'domicilio', def:'domicilio', dataKey:'domicilio.name' , dataType:'object'},
    ];

    this.tableColumns2 = [
      {
        label: 'codigo',
        def: 'codigo',
        dataKey: 'codigo' /*,dataType:'date',formatt:'dd MM yyyy'*/,
      },
      { label: 'denominacion', def: 'denominacion', dataKey: 'denominacion' },
     // { label: 'entidad', def: 'entidad', dataKey: 'entidad' },

      //{ label: 'cuit', def: 'cuit', dataKey: 'cuit' },
      //{label:'domicilio', def:'domicilio', dataKey:'domicilio.name' , dataType:'object'},
    ];
  }

  tableConfig: TableConfig = {
    isSelectable: false, // check de selecionar
    isNuevo: true, // boton nuevo
    isSeleccion: true, // boton seleccionar
    optionsPag: [5, 10, 20],
    isSearch: true,
    isFechaD:true,
    isFechaH:true
  };

  prueba(data: any){
    console.log("data: ", data);

  }
}
