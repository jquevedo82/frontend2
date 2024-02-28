import { Component, OnInit } from '@angular/core';
import { ConfirmationModalComponent } from 'src/app/componentes/confirmation-modal/confirmation-modal.component';
import { ModalComponent } from 'src/app/componentes/modal/modal.component';
declare var $:any;
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  constructor(private swalModal: ConfirmationModalComponent,
    private modal: ModalComponent ) { }
  id: any='Home';

  dato2!:string;
  dato!:any[];
  data: any = [
    { denominacion: 'Promo 152', id: '01' },
    { denominacion: 'Promo 253', id: '02' },
    { denominacion: 'Promo 234', id: '03' },
    { denominacion: 'Promo 145', id: '04' },
    { denominacion: 'Promo 526', id: '05' },
  ];
  data2: any = [
    { denominacion: 'Promo 15', id: '01' },
    { denominacion: 'Promo 25', id: '02' },
    { denominacion: 'Promo 23', id: '03' },
    { denominacion: 'Promo 14', id: '04' },
    { denominacion: 'Promo 52', id: '05' },
  ];
  ngOnInit(): void {
    $('.select2').select2();
  }

  Active(ids: any){
    this.id=ids;
  }



   async onOpenSwal() {
      const result = await this.swalModal.openSwal();
      if (result) {
        console.log('Resultado del modal:',result);
        // Procede con la eliminación
      } else {
       console.log('Resultado del modal:',result);
        // Cancela la eliminación
      }
    }
    async onOpenSwal2() {
      const result = await this.modal.openModal('HOLA');

    }
    async onDelete() {
      const isConfirmed = await this.swalModal.confirm('¿Estás seguro de que deseas eliminar este elemento?');
      if (isConfirmed) {
       console.log('Resultado del modal:',1);
       // Procede con la eliminación
     } else {
      console.log('Resultado del modal:',2);
       // Cancela la eliminación
     }
  }

  mostrar(data: string){
  this.dato2=data;
    console.log(this.dato2);
  }

}
