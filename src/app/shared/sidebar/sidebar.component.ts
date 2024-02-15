import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  usuario: any;
  descri: any;

  menuItems?: any[];

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private sidebarServices: SidebarService
  ) {
    this.menuItems = this.sidebarServices.menu;
    //console.log(this.menuItems);
  }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    if (this.isLogged) {
      this.isAdmin = this.tokenService.isAdmin();

      this.username = this.tokenService.getUserName();

      // this.usuario = this.sidebarServices.usuario(this.username);
      this.sidebarServices.usuario(this.username).subscribe({
        next: (data) => {
          if(data.total>0){
            this.usuario = data.results[0];
            this.descri=this.usuario.Nombres;
          }else{
           this.descri = this.tokenService.getDescri();
           console.log(this.descri);
         }
        },
        error: (err) => {
          console.log(err);
        },
      });
      //console.log(this.usuario);
    }
  }

  logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }
}

