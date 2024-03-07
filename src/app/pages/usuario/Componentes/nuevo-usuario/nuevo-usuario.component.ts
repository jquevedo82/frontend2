import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuarioDto } from 'src/app/models/usuarios/nuevo-usuario.dto';
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
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent implements OnInit {
  miFormulario: FormGroup;
  mostrarCambiarContrasena = false;
  showPassword: boolean = false;

  username: any;
  email: any;
  password: any;
  password2: any;
  denominacion: any;

  usuario: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    private toastrService: ToastrService
  ) {
    this.miFormulario = this.fb.group(
      {
        nombre: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmarPassword: ['', Validators.required],
        habilitado: [''],
      },
      {
        validators: coincidirPassword,
      }
    );
  }

  ngOnInit(): void {}
  guardarDatos(): void {

    if (this.miFormulario.valid) {
      this.usuario = new NuevoUsuarioDto(
        this.miFormulario.value.username,
        this.miFormulario.value.email,

        this.miFormulario.value.password,
        this.miFormulario.value.nombre
      );
      this.usuarioService.register(this.usuario).subscribe({
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
    }else{

    }
  }
  public myError = (controlName: string, errorName: string) => {
    return this.miFormulario.controls[controlName].hasError(errorName);
  };
  public onVolver = () => {
    this.router.navigate(['usuarios']);
  };
  private actualizarValidadorPass() {
    // const passCurrentControl = this.miFormulario.get('password_current')!;
    const passControl = this.miFormulario.get('password')!;
    const confPassControl = this.miFormulario.get('confirmarPassword')!;

    // Agrega o elimina el validador según el estado del checkbox
    if (this.mostrarCambiarContrasena) {
      //    passCurrentControl.setValidators(Validators.required);
      passControl.setValidators(Validators.required);
      confPassControl.setValidators(Validators.required);
    } else {
      //  passCurrentControl.clearValidators();
      passControl.clearValidators();
      confPassControl.clearValidators();

      //  passCurrentControl.setValue('');
      passControl.setValue('');
      confPassControl.setValue('');
    }

    // Actualiza el estado de validación
    //passCurrentControl.updateValueAndValidity();
    passControl.updateValueAndValidity();
    confPassControl.updateValueAndValidity();
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
