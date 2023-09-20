import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableConfig } from 'src/app/componentes/tabla/models/table-configs';
import { Usuario } from 'src/app/models/usuarios/usuario';
import { TokenService } from 'src/app/services/token.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css'],
})
export class ListarUsuarioComponent implements OnInit {
  isAdmin: boolean = false;
  usuarios: Usuario[] = [];
  listaVacia = undefined;
  tableColumns = [
    {
      label: 'Nombre',
      def: 'nombre',
      dataKey: 'nombre' /*,dataType:'date',formatt:'dd MM yyyy'*/,
    },
    { label: 'UserName', def: 'username', dataKey: 'username' },

    { label: 'Email', def: 'email', dataKey: 'email' },
    // { label: 'entidad', def: 'entidad', dataKey: 'entidad' },

    //{label:'domicilio', def:'domicilio', dataKey:'domicilio.name' , dataType:'object'},
  ];
  tableConfig: TableConfig = {
    isSelectable: false, // check de selecionar
    isSeleccion: true, // boton seleccionar
    optionsPag: [5, 10, 20],
    isSearch: true,
  };
  constructor(
    private usuarioService: UsuariosService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarClientes();
    this.isAdmin = this.tokenService.isAdmin();
    console.log(this.isAdmin);
  }

  cargarClientes(): void {
    this.usuarioService.lista().subscribe(
      /* data => {
        this.clientes = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
        //console.log(err);
      }*/
      {
        next: (data) => {
          this.usuarios = data;
          console.log(data);
          this.listaVacia = undefined;
        },
        error: (err) => {
          this.listaVacia = err.error.message[0];
          console.log(err.error.message[0].sqlMessage);
        },
      }
    );
  }
  prueba(data: any) {
    //console.log(data);
  }
  onSelect(data: any) {
    console.log(data);
    if (data.action === 'edit') {
      console.log("ssss");
      this.router.navigate(['usuarios/edit', data]);
  }
    if (data.action === 'new') this.router.navigate(['usuarios/nuevo']);
  }
  onSelect2(data: any) {
    //alert(data.denominacion);
    //  console.log(data);
    //console.log(data);
  }
}
