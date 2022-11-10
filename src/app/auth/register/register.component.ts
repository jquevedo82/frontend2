import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuarioDto } from 'src/app/models/nuevo-usuario.dto';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario: any;
  nombre: any;
  username: any;
  email: any;
  password: any;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onRegister(): void {
    this.usuario = new NuevoUsuarioDto(
      this.nombre,
      this.username,
      this.email,
      this.password
    );
    this.authService.register(this.usuario).subscribe(
      (data) => {
        this.toastrService.success(data.message, 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/login']);
      },
      (err) => {
        this.toastrService.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }
}

