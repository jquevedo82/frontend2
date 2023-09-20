import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { UsuariosService } from '../../services/usuarios.service';

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
      apellido: [this.myParam.apellido, Validators.required],
      username: [this.myParam.username, Validators.required],
      email: [this.myParam.email, [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.usuarioService.detail(this.myParam.codigo).subscribe({
      next: (data) => {
        console.log(data);
        this.miFormulario.patchValue({
          nombre: [data.nombre],
          apellido: [data.apellido],
          username: [data.username],
          email: [data.email],
        });
      },
      error: (err) => {},
    });


  }
  guardarDatos() {
    if (this.miFormulario.valid) {
      const formData = this.miFormulario.value;
      console.log('formData: ', formData);
    } else {
    }
  }
  onVolver() {
    this.router.navigate(['usuarios']);
  }
}
