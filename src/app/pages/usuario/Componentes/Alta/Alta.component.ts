import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/componentes/modal/modal.component';
import { TableConfig } from 'src/app/componentes/tabla/models/table-configs';
import { BotonesConfig } from 'src/app/componentes/tabla/models/table-configs copy';
import { NuevoUsuarioDto } from 'src/app/models/usuarios/nuevo-usuario.dto';
import { UsuariosService } from '../../services/usuarios.service';

@Injectable()
@Component({
  selector: 'app-Alta',
  templateUrl: './Alta.component.html',
  styleUrls: ['./Alta.component.css'],
})
export class AltaComponent implements OnInit {
  usuarios!: any[];
  usuario: any;
  tableColumns = [
    {
      label: 'Nombres',
      def: 'Nombres',
      dataKey: 'Nombres' /*,dataType:'date',formatt:'dd MM yyyy'*/,
    },
    { label: 'Apellido', def: 'Apellido', dataKey: 'Apellido' },
    { label: 'Nro Legajo', def: 'NroLegaVal', dataKey: 'NroLegaVal' },
    { label: 'Nro Bejerman', def: 'NroLegaBej', dataKey: 'NroLegaBej' },
    { label: 'Sucursal', def: 'IdSucu', dataKey: 'IdSucu' },
    // { label: 'entidad', def: 'entidad', dataKey: 'entidad' },

    //{label:'domicilio', def:'domicilio', dataKey:'domicilio.name' , dataType:'object'},
  ];
  tableConfig: TableConfig = {
    isSelectable: false, // check de selecionar
    isNuevo: false,
    isSeleccion: true, // boton seleccionar
    optionsPag: [25, 50, 75, 100],
    isSearch: true,
    isFechaD: true,
    isFechaH: true,
  };
  botones: BotonesConfig = {
    isVer: false,
    isDelete: false,
    isEdit: false,
    isApproved: true,
  };

  constructor(
    private usuarioService: UsuariosService,
    private modal: ModalComponent,
    private router: Router,

  ) {}

  ngOnInit() {
    this.cargarUsuarios();
  }
  cargarUsuarios(): void {
    let datos = {
      selects: ['Nombres', 'Apellido', 'NroLegaVal', 'NroLegaBej', 'IdSucu'],
      // 'limit':5
    };
    this.usuarioService.alta(datos).subscribe({
      next: (data) => {
        this.usuarios = data.data;
        console.log(data);
      },
      error: (err) => {
        console.log(err.error.message[0].sqlMessage);
      },
    });
  }
  prueba(data: any) {
    //console.log(data);
  }
  DarAlta(data: any) {
    this.usuario = new NuevoUsuarioDto(
      data.NroDni,
      '1234',
      data.Nombres
    );
    this.usuarioService.register(this.usuario).subscribe({
      next: (data) => {
        console.log(data);
        this.modal.openModal(data.message);
        this.cargarUsuarios();
      },
      error: (err) => {
        this.modal.openModal(err.error.message);
      },
    });
  }
  onSelect(data: any) {
    console.log(data);
    if(data.action=='approved')
    this.DarAlta(data);
  }

  onSelect2(data: any) {
    //alert(data.denominacion);
    //  console.log(data);
    //console.log(data);
  }
}
