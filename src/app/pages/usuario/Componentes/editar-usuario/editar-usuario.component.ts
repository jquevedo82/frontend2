import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuarios/usuario';
import { TokenService } from 'src/app/services/token.service';
import { UsuariosService } from '../../services/usuarios.service';

// Validador personalizado para verificar si las contraseñas coinciden
const coincidirPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private routex: ActivatedRoute,
    private usuarioService: UsuariosService,
    private tokenService: TokenService
  ) {
    routex.params.subscribe((params: Params) => (this.myParam = params));
    console.log('x: ', this.myParam);

    this.miFormulario = this.fb.group({
      nombre: [this.myParam.nombre, Validators.required],
      denominacion: [this.myParam.denominacion, Validators.required],
      username: [this.myParam.username, Validators.required],
      email: [this.myParam.email, [Validators.required, Validators.email]],
      password: ['',Validators.required],
      confirmarPassword: ['',Validators.required],
    },{
      validator: coincidirPassword
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.usuarioService.detail(this.myParam.id).subscribe({
      next: (data) => {
       // console.log(data);
        this.miFormulario.patchValue({
          nombre: data.nombre,
          denominacion: data.denominacion,
          username: data.username,
          email: data.email,
        });
      },
      error: (err) => {},
    });


  }
  guardarDatos() {
    this.miFormulario.markAllAsTouched();
    console.log("this.miFormulario.valid: ", this.miFormulario.valid);
    if (this.miFormulario.valid) {
      let user : Usuario;
      user =this.miFormulario.value;

      this.usuarioService.update(this.myParam.id,user).subscribe(
        {
          next: (data)=>{console.log(data);},
          error: (err)=>{console.log(err); }

        }
      );
    } else {
      this.miFormulario.markAllAsTouched();
    }
  }
  onVolver() {
    this.router.navigate(['usuarios']);
  }
  public myError = (controlName: string, errorName: string) =>{
    return this.miFormulario.controls[controlName].hasError(errorName);
    }
}
