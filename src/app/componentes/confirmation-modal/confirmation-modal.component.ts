import { Component, Injectable, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
})
@Injectable({
  providedIn: 'root'
})
export class ConfirmationModalComponent  implements OnInit {
  constructor() {}

  ngOnInit(): void {}

/////////////////


async openSwal(): Promise<boolean> {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false,
    allowOutsideClick: false,
  });

  const result = await swalWithBootstrapButtons.fire({
    title: '¿Mantener la Sesión Activa?',
    text: '¿Estás seguro?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '¡Sí, mantenerla!',
    cancelButtonText: 'No, cerrar sesión',
    reverseButtons: true,
  });

  if (result.isConfirmed) {
    await swalWithBootstrapButtons.fire(
      '¡Ok!',
      'La sesión continúa.',
      'success'
    );
    return true;
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    await swalWithBootstrapButtons.fire(
      'Cancelado',
      'Sesión finalizada.',
      'error'
    );
    return false;
  }

  return false; // Por si acaso
}

/////////////////




async confirm(message: string): Promise<boolean> {
  const result = await Swal.fire({
    title: 'Confirmación',
    text: message,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar'
  });
  return result.isConfirmed;
}


}
