import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService,ToastrModule } from 'ngx-toastr';
import { LoginUsuarioDto } from 'src/app/models/usuarios/login-usuario.dto';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: any;
  username: any;
  password: any;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private router: Router
  ) {}


  ngOnInit(): void {

  }

  onLogin(): void {
    console.log(this.username);

    this.usuario = new LoginUsuarioDto(this.username, this.password);


    this.authService.login(this.usuario).subscribe({
      next: (data) => {
        console.log(this.username);
        if (!data.data) {
          this.toastrService.error(data.response.message, 'Fail', {
            timeOut: 3000,
            positionClass: 'toast-top-center',
          });
        } else {
          this.tokenService.setToken(data.data);
          console.log("login navigate");
          this.router.navigate(['/']);
        }
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

