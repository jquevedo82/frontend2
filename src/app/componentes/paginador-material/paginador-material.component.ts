import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-paginador-material',
  templateUrl: './paginador-material.component.html',
  styleUrls: ['./paginador-material.component.css']
})
export class PaginadorMaterialComponent implements OnInit {
  //@Input() data: any;
  listFields: string[] = [];

    dataSource: any[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  
  
  //@Input() metaDataColumns!:any[]
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  length!: number;
  pageSize=5;
  pageSizeOptions:number[] = [5,10,15,20];

  pageEvent!: PageEvent;
 

  constructor() { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
      this.length= this.dataSource.length;
  }

  lowValue: number = 0;
  highValue: number = 5;

  public getPaginatorData(event: PageEvent):PageEvent {
    this.lowValue=event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

}
