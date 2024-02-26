import { Component } from '@angular/core';
import { TableColumn } from 'src/app/componentes/tabla/models/table-column';
import { TableConfig } from 'src/app/componentes/tabla/models/table-configs';

@Component({
  selector: 'app-periodo-prueba',
  templateUrl: './periodo-prueba.component.html',
  styleUrls: ['./periodo-prueba.component.css'],
})
export class PeriodoPruebaComponent {
  tableColumns: TableColumn[] = [];
  dato2: any = 'jj';
  constructor() {}

  ngOnInit(): void {
    this.setTableColumns();
  }
  setTableColumns() {
    this.tableColumns = [
      // {
      //   label: 'NroLegaBej',
      //   def: 'NroLegaBej',
      //   dataKey: 'NroLegaBej' /*,dataType:'date',formatt:'dd MM yyyy'*/,
      // },
      // {
      //   label: 'NroLegaVal',
      //   def: 'NroLegaVal',
      //   dataKey: 'NroLegaVal' /*,dataType:'date',formatt:'dd MM yyyy'*/,
      // },
      {
        label: 'Nombre Empleado',
        def: 'NombreCompleto',
        dataKey: 'NombreCompleto',
      },

      { label: 'Esatdo', def: 'EstadoTexto', dataKey: 'EstadoTexto' },
      {
        label: 'Fecha Ingreso',
        def: 'FecIng',
        dataKey: 'FecIng' , dataType:'date', format:'dd-MM-yyyy'
      },
      {
        label: 'Fin Prueba',
        def: 'FecPrue',
        dataKey: 'FecPrue', dataType:'date', format:'dd-MM-yyyy'
      },
      { label: 'Autorizo', def: 'N2', dataKey: 'N2' },
      { label: 'Sucursal', def: 'S2', dataKey: 'S2' },
    ];
  }

  tableConfig: TableConfig = {
    isNuevo: false,
    isSelectable: false, // check de selecionar
    isSeleccion: false, // boton seleccionar
    optionsPag: [20, 30, 50],
    isSearch: true,
    isFechaD: true,
    isFechaH: true
  };
  prueba(data: any) {
    console.log('data: ', data);
  }

}
