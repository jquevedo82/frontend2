import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableConfig } from '../models/table-configs';

@Component({
  selector: 'app-tabla-seleccion',
  templateUrl: './tabla-seleccion.component.html',
  styleUrls: ['./tabla-seleccion.component.css']
})
export class TablaSeleccionComponent implements OnInit {

  public data$: any = [];
  public page: number = 0;
  tableDisplayColumns: string[] =[];

  tableColumns: any=[];
  selection = new SelectionModel<any>(true, []);

  tableConfig: TableConfig | undefined;

  filtrado = '';

  @Input() set data(data: any){
    this.page=0;
    this.data$ = data;
    this.selection.clear();
  }
  @Input() set filtradi(filtrado: any){
    this.filtrado = filtrado;
  }
  @Input() set columns(columns: any){
    //alert(columns);
    this.tableColumns=columns;
    this.tableDisplayColumns= this.tableColumns.map((col: { def: any; }) => col.def);

  
  }
  @Input() set config(config: TableConfig){
    this.setConfig(config); 
  }
  @Output() select: EventEmitter<any> = new EventEmitter()


  constructor() { }

  onSelect(){
    this.select.emit(this.selection.selected)
  }

  ngOnInit(): void {
    
  }
  setConfig(config: TableConfig){
    this.tableConfig = config;
    if(this.tableConfig.isSelectable){
      this.tableDisplayColumns.unshift('select');
    }
  }
  nextPage(){
    this.page+=15;
  }
  previusPage(){
    if(this.page > 0)
      this.page-=15;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data$.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.selection.selected.length=0;
      this.onSelect();
      return;
    }

    this.selection.select(...this.data$);
    this.onSelect();
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
