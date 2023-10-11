export class Usuario {
  id?: number;
  nombre: string;
  denominacion: string;
  username: string;
  email: string;
  public password?: string;

  nivel?:boolean;


  constructor(
    nombre: string,
    denominacion: string,
    username: string,
    email: string,
    password?: string,
  ) {

    this.nombre = nombre;
    this.denominacion= denominacion;
    this.username= username;
    this.email= email;
    this.password= password;

  }

}
