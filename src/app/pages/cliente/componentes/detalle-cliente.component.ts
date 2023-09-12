import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css'],
})
export class DetalleClienteComponent implements OnInit {
  cliente: any;

  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.clienteService.detail(id).subscribe(
      /*
      data => {
        this.cliente = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
      */
      {
        next: (data) => {
          this.cliente = data;
        },
        error: (err) => {
          this.toastr.error(err.error.message, 'Fail', {
            timeOut: 3000,
            positionClass: 'toast-top-center',
          });
          this.volver();
        },
      }
    );
  }

  volver(): void {
    this.router.navigate(['/cliente/lista']);
  }
}
