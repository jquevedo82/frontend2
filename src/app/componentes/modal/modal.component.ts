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

  async openModal(message: string): Promise<void> {
    await Swal.fire({
      title: 'Mensaje',
      text: message,
      icon: 'info',
      showConfirmButton: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
  }
}
