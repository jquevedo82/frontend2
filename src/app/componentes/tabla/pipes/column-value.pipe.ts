import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnValue',
})
export class ColumnValuePipe implements PipeTransform {
  transform(row: any, column: any): unknown {
    let displayValue = row[column.dataKey];
    switch (column.dataType) {
      case 'date':
        if (column.format != undefined)
          displayValue = new DatePipe('en').transform(
            displayValue,
            column.format
          );
        break;
      case 'object':
          const arrayKeys = column.dataKey.split('.')
          let currentValue: any

          arrayKeys.forEach((key: string)=>{
            if(currentValue === undefined){
              currentValue= row[key]
              return
            }
            currentValue = currentValue[key]
          });
          displayValue = currentValue;
        break;
      default:
        break;
    }

    return displayValue;
  }
}
