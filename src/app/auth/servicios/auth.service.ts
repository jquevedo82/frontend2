import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUsuarioDto } from '../../models/usuarios/login-usuario.dto';
import { NuevoUsuarioDto } from '../../models/usuarios/nuevo-usuario.dto';
import { TokenDto } from '../../models/token.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = environment.authURL;

  constructor(private httpcClient: HttpClient) {}

  login(dto: LoginUsuarioDto): Observable<any> {
    return this.httpcClient.post<any>(this.authURL + 'login',dto);
  }

  register(dto: NuevoUsuarioDto): Observable<any> {
    return this.httpcClient.post<any>(this.authURL + 'nuevo',dto);
  }

  refresh(dto: TokenDto): Observable<any> {
    return this.httpcClient.post<any>(this.authURL + 'refresh',dto);
  }


}
