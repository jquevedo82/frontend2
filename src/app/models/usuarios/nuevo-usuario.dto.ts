export class NuevoUsuarioDto {
  nombre: string;

  username: string;

  email: string;

  password: string;

  constructor(
    nombre: string,
    username: string,
    email: string,
    password: string

  ) {
    this.nombre = nombre;
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
