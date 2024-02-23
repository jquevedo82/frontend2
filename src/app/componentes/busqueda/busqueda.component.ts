import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TableColumn } from '../tabla/models/table-column';
import { TableConfig } from '../tabla/models/table-configs';
import { BusquedaService } from './services/busqueda.service';
import {
  MatLegacyDialog as MatDialog,
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
} from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  filtrado = '';
  nombre = '';
  codigo = '';

  tabla: string = '';

  mostrarSwitch: boolean = false;
  tableColumns: TableColumn[] = [];
  public data$: any = [];

  constructor(
    private busquedaService: BusquedaService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // this.setTableColumns();
  }
  @Input() set columnas(data: any) {
    //this.data$ = data;
    this.tableColumns = data;
  }
  @Input() set tablas(data: any) {
    //this.data$ = data;
    this.tabla = data;
  }
  @Input() set setTabla(data: any) {
    this.tabla = data;
  }

  @Output() registro: EventEmitter<any> = new EventEmitter();

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        datos: this.data$,
        columns: this.tableColumns,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result != undefined) {
        //this.codigo = result.codigo;
        this.nombre = result.denominacion;
        this.filtrado = result.codigo;
        this.prueba();
      }
    });
  }
  /* setTableColumns() {
    this.tableColumns = [
      { label: 'denominacion', def: 'denominacion', dataKey: 'denominacion' },
      { label: 'entidad', def: 'entidad', dataKey: 'entidad' },
      {
        label: 'codigo',
        def: 'codigo',
        dataKey: 'codigo' /*,dataType:'date',formatt:'dd MM yyyy'*/ /*,
      },
      { label: 'domicilio', def: 'domicilio', dataKey: 'domicilio' },
      //{label:'domicilio', def:'domicilio', dataKey:'domicilio.name' , dataType:'object'},
    ];
  }*/
  // onSelect(data: any) {
  //   console.log(data);
  // }

  busqueda(search: string) {
    /*const query = (event.target as HTMLInputElement).value;
    console.log(event.target.value);*/
    if (search.length < 3) {
      return;
    }

    this.busquedaService
      .lista(search.toUpperCase(), this.tabla)
      .subscribe((data) => {
        this.data$ = data;
        console.log(data.length);

        this.openDialog();
      });
  }
  busqueda2(search: string) {
    if (search.length < 3) {
      return;
    }
    this.busquedaService
      .lista(search.toUpperCase(), this.tabla)
      .subscribe((data) => {
        this.data$ = data;

      });
  }

  limpiar() {
    this.data$ = '';
    this.mostrarSwitch = false;
    this.filtrado = '';
  }

  prueba() {
    this.registro.emit(this.nombre);
  }
}

@Component({
  selector: 'app-busqueda-dialog',
  templateUrl: './busqueda.component-dialog.html',
})
export class DialogContentExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  tableColumns = this.data.columns;
  data$ = this.data.datos;

  tableConfig: TableConfig = {
    isSelectable: false, // check de selecionar
    isNuevo:false, // boton nuevo
    isSeleccion: false, // boton seleccionar
    isSearch: false,    // edit para search
    optionsPag: [5, 10, 20],
    isFechaD:false,
    isFechaH:false
  };

  onSelect(data: any) {
    //alert(data.denominacion);
    // console.log(data);
    this.dialogRef.close(data);
  }
  onSelect2(data: any) {
    //alert(data.denominacion);
    //console.log(data);
    this.dialogRef.close(data);
  }
  @Input() set columnas(data: any) {
    //this.data$ = data;
    this.tableColumns = data;
  }
}
