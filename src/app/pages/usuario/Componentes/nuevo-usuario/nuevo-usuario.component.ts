import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  miFormulario: FormGroup;

  constructor(private router: Router,private fb: FormBuilder ) {

    this.miFormulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

    });

  }

  ngOnInit(): void {

  }
  guardarDatos() {
    if (this.miFormulario.valid) {
      const formData = this.miFormulario.value;
      console.log("formData: ", formData);

    }else{

    }
  }
  onVolver() {
    this.router.navigate(['usuarios']);
  }
}
