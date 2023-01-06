import { Pipe, PipeTransform } from '@angular/core';
import { Operadores } from '../models/operadores';

@Pipe({
  name: 'filtro',
})
export class FilterPipe implements PipeTransform {
  transform(operador: Operadores[], arg: string = '', page: number = 0): Operadores[] {
      let resultado: Operadores[] = [];

    if (arg === '' || arg.length < 3)return operador.slice(page, page + 15);

    resultado=operador.filter( oper => oper.denominacion.toUpperCase().includes( arg.toUpperCase() ))
    return resultado.slice(page, page + 15);
/*
    if (arg === '' || arg.length < 3) return [];
    for (const oper of operador) {
      if (oper.denominacion.toUpperCase().indexOf(arg.toUpperCase()) > -1) {
        resultado.push(oper);
      }
    }
    return resultado.slice(page, page + 5);*/
  }
}
