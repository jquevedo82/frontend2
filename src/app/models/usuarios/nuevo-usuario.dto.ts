export class NuevoUsuarioDto {
  //nombre: string;

  username: string;

  email?: string;

  password: string;

  Descri: string;

  nivel:boolean;

  Estado: boolean;

  constructor(
   // nombre: string,
    username: string,
    password: string,
    denominacion: string,
    email?: string,

  ) {
    //this.nombre = nombre;
    this.username = username;
    this.password = password;
    this.email = email;
    this.Descri = denominacion;
    this.nivel = true;
    this.Estado = true;
  }
}
