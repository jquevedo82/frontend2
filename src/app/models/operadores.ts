export class Operadores {
  entidad!: number;
  codigo!: string;
  sinonimo!: string;
  denominacion: string;
  den_comercial!: string;
  domicilio!: number;
  postal!: string;
  tabla_pcia!: string;
  provincia!: string;
  tabla_pais!: string;

  pais!: number;
  tabla_iva!: string;
  tabla_iibb!: string;
  regimen_iibb!: string;
  tipo_cuit!: string;
  cuit!: number;
  iibb!: string;
  telefono!: string;
  email!: string;
  fax!: string;
  contacto!: number;
  lista_precios!: string;
  habilitado!: string;
  tabla_clasif!: string;
  clasificacion!: string;
  iva_cargo!: number;


  constructor(
    denominacion: string,

  ) {
    this.denominacion = denominacion;

  }
}
