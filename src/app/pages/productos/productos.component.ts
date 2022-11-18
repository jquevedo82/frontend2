import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  id: any='Home';
  constructor() { }

  ngOnInit(): void {
    $('.select2').select2();
  }

  Active(ids: any){
    this.id=ids;
  }


}
