import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/componentes/tabla/models/table-column';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css'],
})
export class FacturasComponent implements OnInit {
  tableColumns: TableColumn[] = [];
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
      { label: 'entidad', def: 'entidad', dataKey: 'entidad' },

      { label: 'domicilio', def: 'domicilio', dataKey: 'domicilio' },
      //{label:'domicilio', def:'domicilio', dataKey:'domicilio.name' , dataType:'object'},
    ];
  }
}
