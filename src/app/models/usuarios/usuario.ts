export class Usuario {
  id?: number;
  Descri: string;
  username: string;
  email: string;
  public password?: string;
  Estado?: boolean;
  nivel?: boolean;

  constructor(
    Descri: string,
    username: string,
    email: string,
    password?: string,
    Estado?: boolean
  ) {
    this.Estado = Estado;
    this.Descri = Descri;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
