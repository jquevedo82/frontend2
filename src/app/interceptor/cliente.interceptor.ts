import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  catchError,
  throwError,
  Observable,
  concatMap,
} from 'rxjs';
import { TokenService } from '../services/token.service';
import { TokenDto } from '../models/token.dto';
import { AuthService } from '../auth/servicios/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

const AUTHORIZATION = 'Authorization';
const BEARER = 'Bearer ';

@Injectable()
export class ClienteInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    if (!this.tokenService.isLogged()) {
      return next.handle(request);
    }
    let intReq = request;
    const token = this.tokenService.getToken();
    intReq = this.addToken(request,token);
    return next.handle(intReq).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) { // se vencio el token

          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Mantener la Sesion Activa?',
            text: "Estas Seguro!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, !!',
            cancelButtonText: 'No, Cierra Sesion!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Ok!',
                'Sesion Continua.',
                'success'
              )
              //this.router.navigate(['/cliente/lista']);

            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'Sesion Finalizada :)',
                'error'
              )
              this.tokenService.logOut();
              this.router.navigate(['/']);
            }
            
          })


          const dto: TokenDto = new TokenDto(token);
          return this.authService.refresh(dto).pipe(
            concatMap((data: any) => {
              console.log('refreshing..');
              this.tokenService.setToken(data.token);
              intReq = this.addToken(request,data.token);
              return next.handle(intReq);
            })
          );



        } else {
          //console.log('chao..',err.status);
          //this.tokenService.logOut();
          return throwError(err);
        }
      })
    );
  }
  private addToken(request: HttpRequest<unknown>, token: string): HttpRequest<unknown>{
    return request.clone({
      headers: request.headers.set(AUTHORIZATION, BEARER + token)
    });
  }
}

export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ClienteInterceptor, multi: true },
];
