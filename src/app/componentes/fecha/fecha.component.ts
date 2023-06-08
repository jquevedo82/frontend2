import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {

  titulo: string ="Seleccione ...";
  read: boolean = false;
  minDate: Date;
  maxDate: Date;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 10, 0, 1);
    this.maxDate = new Date(currentYear + 10, 11, 31);
      }

  ngOnInit(): void {
  }
  @Input() set setTitulo(titulo: string) {
    this.titulo = titulo;
  }
  @Input() set setRead(read: boolean) {
    this.read = read;
  }

  @Input() set setMin(read: string) {
    let x1= read.split('-');
    this.minDate = new Date(parseInt(x1[0]),parseInt(x1[1])-1,parseInt(x1[2]));
    console.log(this.minDate);
  }
  @Input() set setMax(xx: string) {
    let x2= xx.split('-');
    this.maxDate = new Date(parseInt(x2[0]),parseInt(x2[1])-1,parseInt(x2[2]));
    console.log(this.maxDate);;
  }

}
