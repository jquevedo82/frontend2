import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css'],
})
export class NuevoClienteComponent implements OnInit {
  nombre = '';
  apellido = '';
  dni = '';
  direccion = '';

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const cliente = new Cliente(
      this.nombre,
      this.apellido,
      this.dni,
      this.direccion
    );
    this.clienteService.save(cliente).subscribe(
      (data) => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.volver();
      },
      (err) => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/cliente']);
  }
}
