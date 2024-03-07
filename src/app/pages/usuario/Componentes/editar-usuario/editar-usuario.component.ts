import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationModalComponent } from 'src/app/componentes/confirmation-modal/confirmation-modal.component';
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
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  miFormulario: FormGroup;

  myParam: any;
  mostrarCambiarContrasena = false;
  showPassword: boolean = false;
  activated: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private routex: ActivatedRoute,
    private usuarioService: UsuariosService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private swalModal: ConfirmationModalComponent
  ) {

    routex.params.subscribe((params: Params) => (this.myParam = params));
    this.miFormulario = this.fb.group(
      {
        Descri: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', [/*Validators.required,*/ Validators.email]],
        //   password_current: [''],
        password: [''],
        confirmarPassword: [''],
        habilitado: [''],
      },
      {
        validators: coincidirPassword,
      }
    );
    this.actualizarValidadorPass();
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.usuarioService.detail(this.myParam.id).subscribe({
      next: (data) => {

        this.miFormulario.patchValue({
          Descri: data.data[0].Descri,
          username: data.data[0].username,
          email: data.data[0].email,
          habilitado: data.data[0].Estado,
        });
      },
      error: (err) => {},
    });
  }
  guardarDatos() {
    console.log('this.miFormulario.valid: ', this.miFormulario.valid);
    if (this.miFormulario.valid) {
      let user: Usuario;
      user = {
        // nombre: this.miFormulario.value.Descri,
        Descri: this.miFormulario.value.Descri,
        username: this.miFormulario.value.username,
        email: this.miFormulario.value.email,
        Estado: this.miFormulario.value.habilitado,
      };
      if (this.mostrarCambiarContrasena) {
        const passControl = this.miFormulario.get('password')!.value;
        user.password = passControl;
      }
      console.log(user);
      this.usuarioService.update(this.myParam.id, user).subscribe({
        next: (data) => {
          console.log(data);
          this.toastrService.success(data.message, 'OK', {
            timeOut: 3000,
            positionClass: 'toast-top-center',
          });
          this.router.navigate(['usuarios']);
        },
        error: (err) => {
          console.log(err);
          this.toastrService.error(err.error.message, 'Fail', {
            timeOut: 3000,
            positionClass: 'toast-top-center',
          });
        },
      });
    } else {
      this.miFormulario.markAllAsTouched();
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onVolver() {
    this.router.navigate(['usuarios']);
  }
  public myError = (controlName: string, errorName: string) => {
    return this.miFormulario.controls[controlName].hasError(errorName);
  };
  toggleContrasena(): void {
    this.mostrarCambiarContrasena = !this.mostrarCambiarContrasena;
    this.actualizarValidadorPass();
  }
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

}
