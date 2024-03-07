import { Component, Injectable, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class ModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  async openModal(message: string, tipo = 'info'): Promise<void> {
    if (tipo == 'error') {
      await Swal.fire({
        title: 'Mensaje',
        text: message,
        icon: 'error',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
      });
    }else{
      await Swal.fire({
        title: 'Mensaje',
        text: message,
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
      });
    }
  }
}
