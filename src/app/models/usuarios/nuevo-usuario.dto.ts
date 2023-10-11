export class NuevoUsuarioDto {
  nombre: string;

  username: string;

  email: string;

  password: string;

  denominacion: string;

  nivel:boolean;

  constructor(
    nombre: string,
    username: string,
    email: string,
    password: string,
    denominacion: string

  ) {
    this.nombre = nombre;
    this.username = username;
    this.password = password;
    this.email = email;
    this.denominacion = denominacion;
    this.nivel = true;
  }
}
