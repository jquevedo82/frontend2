import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { TableColumn } from '../models/table-column';
import { TableConfig } from '../models/table-configs';
import { BotonesConfig } from '../models/table-configs copy';

@Component({
  selector: 'app-tabla-seleccion',
  templateUrl: './tabla-seleccion.component.html',
  styleUrls: ['./tabla-seleccion.component.css'],
})
export class TablaSeleccionComponent implements OnInit, AfterViewInit {
  public dataSource: MatTableDataSource<Array<any>> = new MatTableDataSource();
  //public data$: any = [];
  tableDisplayColumns: string[] = [];

  public page: number = 0;

  //tableColumns: any=[];
  tableColumns: TableColumn[] = [];

  botones: BotonesConfig = {
    isVer:false,
    isDelete:false,
    isEdit:false,
    isApproved:false,

  };

  selection = new SelectionModel<any>(true, []);

  tableConfig: TableConfig | undefined;

  //filtrado = '';
  isNuevo = false;
  isSeleccion = false;
  isSelectable = false;
  options = [10, 15, 20];
  isSearch = false;

  @Input() set data(data: Array<any>) {
    //this.data$ = data;
    this.dataSource.data = data;
    this.selection.clear();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /*@Input() set filtradi(filtrado: any){
    this.filtrado = filtrado;
  }*/

  @Input() set paginado(options: any) {
    this.options = options;
  }

  @Input() set columns(columns: TableColumn[]) {
    //alert(columns);
    this.tableColumns = columns;
    this.tableDisplayColumns = this.tableColumns.map(
      (col: { def: any }) => col.def
    );
  }
  @Input() set config(config: TableConfig) {
    this.setConfig(config);
  }
  @Input() set setBotones(config: BotonesConfig) {
    this.setConfigBotones(config);
  }
  @Output() select: EventEmitter<any> = new EventEmitter();

  @Output() selectv: EventEmitter<any> = new EventEmitter();

  @Output() borrar: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onSelect() {
    this.selectv.emit(this.selection.selected);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  setConfigBotones(config: BotonesConfig) {
    this.botones = config;


  }
  setConfig(config: TableConfig) {
    this.isNuevo = config.isNuevo;
    this.isSeleccion = config.isSeleccion;
    this.isSelectable = config.isSelectable;
    this.isSearch = config.isSearch;
    this.tableConfig = config;
    this.options = config.optionsPag;

    if (this.isSeleccion) {
      this.tableDisplayColumns.push('acciones');
    }

    if (this.tableConfig.isSelectable) {
      this.tableDisplayColumns.unshift('select');
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    //const numRows = this.data$.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.selection.selected.length = 0;
     // this.onSelect();
      return;
    }

    this.selection.select(...this.dataSource.data);
 //   this.onSelect();
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  newRow() {
    var reg = { action: 'new' };

    this.select.emit(reg);
  }
  editRow(row?: any) {
    row.action = 'edit';

    this.select.emit(row);
  }
  deleteRow(row?: any) {
    row.action = 'delete';
    // console.log(row);
    this.select.emit(row);
  }
  selecionarUsuario(row?: any) {
    //console.log(row);
    row.action = 'seleccionar';
    this.select.emit(row);
  }
  verRow(row?: any) {
    //console.log(row);
    row.action = 'ver';
    this.select.emit(row);
  }
  approvedRow(row?: any) {
    row.action = 'approved';
    // console.log(row);
    this.select.emit(row);
  }
}
