import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  id: any='Home';

  dato!:any[];
  constructor() { }
  data: any = [
    { denominacion: 'Promo 152', id: '01' },
    { denominacion: 'Promo 253', id: '02' },
    { denominacion: 'Promo 234', id: '03' },
    { denominacion: 'Promo 145', id: '04' },
    { denominacion: 'Promo 526', id: '05' },
  ];
  data2: any = [
    { denominacion: 'Promo 15', id: '01' },
    { denominacion: 'Promo 25', id: '02' },
    { denominacion: 'Promo 23', id: '03' },
    { denominacion: 'Promo 14', id: '04' },
    { denominacion: 'Promo 52', id: '05' },
  ];
  ngOnInit(): void {
    $('.select2').select2();
  }

  Active(ids: any){
    this.id=ids;
  }
  mostrar(data: any[]){
  this.dato=data;
    console.log(this.dato);
  }

}
