import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn } from '../tabla/models/table-column';
import { BusquedaService } from '../busqueda/services/busqueda.service';
import { TableConfig } from '../tabla/models/table-configs';

@Component({
  selector: 'app-busqueda2',
  templateUrl: './busqueda2.component.html',
  styleUrls: ['./busqueda2.component.css']
})
export class Busqueda2Component implements OnInit {

  filtrado = '';
  nombre = '';
  codigo = '';

  usuarios: any;

  tabla: string = '';

  mostrarSwitch: boolean = false;
  tableColumns: TableColumn[] = [];

  tableConfig: TableConfig = {
    isSelectable: false, // check de selecionar
    isSeleccion: false, // boton seleccionar
    isSearch: false,   // edit para search
    optionsPag: [5, 10, 20],
  };

  public data$: any = [];

  constructor(
    private busquedaService: BusquedaService,
  ) {}

  ngOnInit(): void {
    this.cargarTabla();
  }
  @Input() set config(config: TableConfig) {
    this.tableConfig = config;
  }
  @Input() set columnas(data: any) {
    this.tableColumns = data;
  }
  @Input() set setTabla(data: any) {
    this.tabla = data;
  }

  @Output() registro: EventEmitter<any> = new EventEmitter();


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
    this.cargarTabla();
    this.mostrarSwitch = false;
    this.filtrado = '';
  }

  cargarTabla(){
    this.busquedaService
    .lista('', this.tabla)
    .subscribe((data) => {
      this.data$ = data;
      console.log(data.length);

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
}

