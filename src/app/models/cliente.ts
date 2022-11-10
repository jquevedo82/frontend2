export class Cliente {
  id!: number;
  nombre: string;
  apellido: string;
  dni: string;
  direccion?: string;

  constructor(
    nombre: string,
    apellido: string,
    dni: string,
    direccion?: string
  ) {
    this.nombre = nombre;
    this.apellido= apellido;
    this.dni= dni;
    this.direccion= direccion;
  }
}
