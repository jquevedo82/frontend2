import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuarioDto } from 'src/app/models/nuevo-usuario.dto';
import { SidebarService } from 'src/app/services/sidebar.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  isLogged: boolean = false;
  isAdmin: boolean = false;
  username: string = '';
  usuario:  any;

  menuItems?:any[];

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private sidebarServices: SidebarService
  ) {
    this.menuItems=this.sidebarServices.menu;
    //console.log(this.menuItems);
  }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();

    this.isAdmin = this.tokenService.isAdmin();

    this.username = this.tokenService.getUserName();
    
   // this.usuario = this.sidebarServices.usuario(this.username);
    this.sidebarServices.usuario(this.username).subscribe(
      data => {
        this.usuario = data;
        console.log(data);
      },
      err => {
        
      }
    );
//console.log(this.usuario);
    
  }

  logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }
}
