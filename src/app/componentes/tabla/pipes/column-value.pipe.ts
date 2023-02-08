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
        if (column.formatt != undefined)
          displayValue = new DatePipe('en').transform(
            displayValue,
            column.formatt
          );
        break;
      default:
        break;
    }

    return row[column.dataKey];
  }
}
