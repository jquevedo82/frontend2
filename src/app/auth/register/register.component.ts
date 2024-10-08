import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuarioDto } from 'src/app/models/usuarios/nuevo-usuario.dto';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  usuario: any;
  nombre: any;
  username: any;
  email: any;
  password: any;
  password2: any;
  denominacion: any;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('aqui8');
  }

  onRegister(): void {
    this.usuario = new NuevoUsuarioDto(
      this.username,
      this.email,
      this.password,
      this.denominacion
    );
    this.authService.register(this.usuario).subscribe({
      next: (data) => {
        this.toastrService.success(data.message, 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });

        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.toastrService.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      },
    });
  }
}
