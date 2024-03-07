import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModPassDto } from 'src/app/models/usuarios/mod-pass.dto';
import { Usuario } from 'src/app/models/usuarios/usuario';
import { TokenService } from 'src/app/services/token.service';
import { UsuariosService } from '../../services/usuarios.service';
// Validador personalizado para verificar si las contraseñas coinciden
const coincidirPassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmarPassword = control.get('confirmarPassword');

  if (password?.value !== confirmarPassword?.value) {
    return { coincidenciaPassword: true };
  }

  return null;
};
@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css'],
})
export class ModificarUsuarioComponent implements OnInit {
  showPassword: boolean = false;
  miFormulario: FormGroup;
  myParam: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    private tokenService: TokenService,

  ) {
this.myParam=tokenService.getUserName();
    this.miFormulario = this.fb.group(
      {
        password_current: ['', Validators.required],
        password: ['', Validators.required],
        confirmarPassword: ['', Validators.required],
      },
      {
        validators: coincidirPassword,
      }
    );
  }

  ngOnInit(): void {
    console.log("object");
  }
  onVolver() {
    this.router.navigate(['usuarios']);
  }
  public myError = (controlName: string, errorName: string) => {
    return this.miFormulario.controls[controlName].hasError(errorName);
  };
  guardarDatos() {
    console.log('this.miFormulario.valid: ', this.miFormulario.valid);
    if (this.miFormulario.valid) {
      let user: ModPassDto;
      user = {
        username: this.miFormulario.value.confirmarPassword,
        currentPassword: this.miFormulario.value.password_current,
        password: this.miFormulario.value.password,
      };

      console.log(user);
      this.usuarioService.updatePass(this.myParam, user).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.miFormulario.markAllAsTouched();
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
