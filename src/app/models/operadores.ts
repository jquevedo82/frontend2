export class Operadores {
  entidad!: number;

  codigo!: string;

  sinonimo!: string;

  denominacion: string;

  den_comercial!: string;

  domicilio!: string;

  localidad!: string;

  postal!: string;

  tabla_pcia!: number;

  provincia!: string;

  tabla_pais!: number;

  pais!: string;

  tabla_iva!: number;

  iva!: string;

  tabla_iibb!: number;

  regimen_iibb!: string;

  tipo_cuit!: string;

  cuit!: string;

  iibb!: string;

  telefono!: string;

  email!: string;

  fax!: string;

  contacto!: string;

  lista_precios!: string;

  habilitado!: boolean;

  tabla_clasif!: number;

  clasificacion!: string;

  iva_a_cargo!: number;

  constructor(
    denominacion: string,

  ) {
    this.denominacion = denominacion;

  }
}
