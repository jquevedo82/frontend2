import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from '../services/cliente.service';
import { TokenService } from 'src/app/services/token.service';
import { Operadores } from 'src/app/models/operadores';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  clientes: Operadores[] = [];
  listaVacia=undefined;

  isAdmin: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private tokenService: TokenService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.cargarClientes();
    this.isAdmin=this.tokenService.isAdmin();
    console.log(this.isAdmin)
  }

  cargarClientes(): void {
    this.clienteService.lista().subscribe(
     /* data => {
        this.clientes = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
        //console.log(err);
      }*/
      {
        next: data =>{
          this.clientes = data;
          this.listaVacia = undefined;
        },
        error: err =>{
          this.listaVacia = err.error.message;
          //console.log(err);
        }
      }
    );
  }

  borrar(id: string): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estás Seguro?',
      text: "YNo hay vuelta atras!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Borra eso!!',
      cancelButtonText: 'No, cancele!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(id).subscribe(res=>this.cargarClientes());
        swalWithBootstrapButtons.fire(
          'Ok!',
          'Cliente Eliminado.',
          'success'
        )
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Cliente a salvo :)',
          'error'
        )
      }
      this.router.navigate(['/cliente/lista']);
    })
  }

}
