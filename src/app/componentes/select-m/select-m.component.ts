import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-m',
  templateUrl: './select-m.component.html',
  styleUrls: ['./select-m.component.css'],
})
export class SelectMComponent implements OnInit {
  constructor() {}
  data$?: any[];
  selectM = new FormControl('');

  mult = 0;

  selectMList?: any[];

  ngOnInit(): void {
    this.selectMList = this.data$;
    console.log(this.selectMList);
  }

  @Input() set setData(data: any[]) {
    //this.data$ = data;
    this.data$ = data;
  }

  @Input() set setMultiple(data: number) {
    //this.data$ = data;
    this.mult = data;
  }
  @Output() selecionadas: EventEmitter<any> = new EventEmitter();

  seleccionar(event: any) {
    let resp = event.value;

    let resp1: any = [];

    if (this.mult == 0) {
      this.data$?.map((opc: { denominacion: string }) => {
        resp == opc.denominacion ? resp1.push(opc) : '';
      });
    } else {
      this.data$?.map((opc: { denominacion: string }) => {
        resp.map((val: string) =>
          val == opc.denominacion ? resp1.push(opc) : ''
        );
      });
    }
    console.log(resp1);
    // this.selecionadas.emit(resp);
  }
}
