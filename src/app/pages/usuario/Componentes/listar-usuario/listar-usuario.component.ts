import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableConfig } from 'src/app/componentes/tabla/models/table-configs';
import { Usuario } from 'src/app/models/usuarios/usuario';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';
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
    this.cargarUsuarios();
    this.isAdmin = this.tokenService.isAdmin();
    console.log(this.isAdmin);
  }

  cargarUsuarios(): void {
    console.log('aqi');

    let datos = {
      selects: ['id', 'nombre', 'username', 'email'],
      // 'limit':5
    };
    this.usuarioService.lista(datos).subscribe({
      next: (data) => {
        this.usuarios = data;
        console.log(data);
        this.listaVacia = undefined;
      },
      error: (err) => {
        this.listaVacia = err.error.message[0];
        console.log(err.error.message[0].sqlMessage);
      },
    });
  }
  prueba(data: any) {
    //console.log(data);
  }
  borrar(id: string): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: '¿Estás Seguro?',
        text: 'Y No hay vuelta atras!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Borra eso!!',
        cancelButtonText: 'No, cancele!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.usuarioService.delete(id).subscribe({
            next: (data) => {
              this.cargarUsuarios();
              swalWithBootstrapButtons.fire(
                'Ok!',
                'Usuario Eliminado.',
                'success'
              );
            },
            error: (err) => {
              console.log(err.error);
              swalWithBootstrapButtons.fire(
                'Error!',
                'No tiene autorizacion.',
                'error'
              );
            },
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Usuario a salvo :)',
            'error'
          );
        }
        this.router.navigate(['usuarios']);
      });
  }
  onSelect(data: any) {
    console.log(data);

    if (data.action === 'edit') {
      this.router.navigate(['usuarios/edit', data.id]);
    }
    if (data.action === 'new') this.router.navigate(['usuarios/nuevo']);

    if (data.action === 'delete') {
      this.borrar(data.id);
    }
  }

  onSelect2(data: any) {
    //alert(data.denominacion);
    //  console.log(data);
    //console.log(data);
  }
}
