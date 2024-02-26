import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn } from '../tabla/models/table-column';
import { BusquedaService } from '../busqueda/services/busqueda.service';
import { TableConfig } from '../tabla/models/table-configs';
import * as moment from 'moment';
import { BotonesConfig } from '../tabla/models/table-configs copy';

@Component({
  selector: 'app-busqueda2',
  templateUrl: './busqueda2.component.html',
  styleUrls: ['./busqueda2.component.css'],
})
export class Busqueda2Component implements OnInit {
  filtrado = '';
  nombre = '';
  fechad = '';
  fechah = '';
  cargando = false;

  minDate: Date;
  maxDate: Date;
  read = true;

  usuarios: any;

  tabla: string = '';

  tableColumns: TableColumn[] = [];

  tableConfig: TableConfig = {
    isSelectable: false, // check de selecionar
    isNuevo: false, //borton nuevo
    isSeleccion: false, // boton seleccionar
    isSearch: false, // edit para search
    optionsPag: [5, 10, 20],
    isFechaD: false,
    isFechaH: false,
  };


  botones: BotonesConfig = {
    isVer:false,
    isDelete:false,
    isEdit:false,
    isApproved:false,

  };

  public data$: any = [];

  constructor(private busquedaService: BusquedaService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 10, 0, 1);
    this.maxDate = new Date(currentYear + 10, 11, 31);
  }

  ngOnInit(): void {
    this.cargarTabla();
  }
  @Input() set config(config: TableConfig) {
    this.tableConfig = config;
  }
  @Input() set configBotones(config: BotonesConfig) {
    this.botones = config;
  }
  @Input() set columnas(data: any) {
    this.tableColumns = data;
  }
  @Input() set setTabla(data: any) {
    this.tabla = data;
  }
  @Input() set setRead(read: boolean) {
    this.read = read;
  }
  @Input() set setMin(read: string) {
    let x1 = read.split('-');
    this.minDate = new Date(
      parseInt(x1[0]),
      parseInt(x1[1]) - 1,
      parseInt(x1[2])
    );
    console.log(this.minDate);
  }
  @Input() set setMax(xx: string) {
    let x2 = xx.split('-');
    this.maxDate = new Date(
      parseInt(x2[0]),
      parseInt(x2[1]) - 1,
      parseInt(x2[2])
    );
    console.log(this.maxDate);
  }

  @Output() registro: EventEmitter<any> = new EventEmitter();

  busqueda(search: string) {
    /*const query = (event.target as HTMLInputElement).value;
    console.log(event.target.value);*/
    if (search.length < 3) {
      return;
    }
    let datos = {
      dato: search.toUpperCase(),
      fechad: this.fechad,
      fechah: this.fechah,
    };
    this.cargando = true;
      this.busquedaService.lista(datos, this.tabla).subscribe((data) => {
        console.log(data.data,1);
        console.log(this.data$,2);
      if (this.data$ != data.data){ this.data$ = data.data;}

      this.cargando = false;
    });
  }

  busqueda2(search: string) {
    if (search.length < 3) {
      return;
    }
    let datos = {
      dato: search.toUpperCase(),
    };
    this.cargando = true;
    this.busquedaService.lista(datos, this.tabla).subscribe((data) => {
      if (this.data$ != data.data) this.data$ = data.data;
      this.cargando = false;
    });
  }

  limpiar() {
    this.cargarTabla();
    this.filtrado = '';
    this.fechad = '';
    this.fechah = '';
  }
  cargarTabla() {
    let datos = {
      dato: '',
    };

    this.busquedaService.lista(datos, this.tabla).subscribe((data) => {
      this.data$ = data.data;
      console.log(data);
    });
  }

  prueba() {
    this.registro.emit(this.nombre);
  }

  onSelect(data: any) {
    // console.log(data);
    this.registro.emit(data);
  }

  onSelect2(data: any) {
    //alert(data.denominacion);
    //console.log(data);
    this.registro.emit(data);
    //console.log(data);
  }
  onFechaD(data: string) {
    console.log(data);
    this.fechad = data;
  }
  onFechaH(data: string) {
    console.log(data);
    this.fechah = data;
  }
}
