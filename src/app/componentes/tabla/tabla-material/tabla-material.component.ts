import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabla-material',
  templateUrl: './tabla-material.component.html',
  styleUrls: ['./tabla-material.component.css']
})
export class TablaMaterialComponent implements OnInit {

  

  public data$: any = [];
  public page: number = 0;
  tableDisplayColumns: string[] =[];
  tableColumns: any=[];

  filtrado = '';

  @Input() set data(data: any){
    this.page=0;
    this.data$ = data;
  }
  @Input() set filtradi(filtrado: any){
    this.filtrado = filtrado;
  }
  @Input() set columns(columns: any){
    //alert(columns);
    this.tableColumns=columns;
    this.tableDisplayColumns= this.tableColumns.map((col: { def: any; }) => col.def);
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  nextPage(){
    this.page+=15;
  }
  previusPage(){
    if(this.page > 0)
      this.page-=15;
  }
}
