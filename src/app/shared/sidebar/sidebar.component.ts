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
  menuItems2?: any;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private sidebarServices: SidebarService
  ) {
    this.menuItems2 = this.sidebarServices.menu;
    this.username = this.tokenService.getUsuario();


    this.cargarMenu(this.username);

  }

  ngOnInit(): void {

    this.isLogged = this.tokenService.isLogged();
    if (this.isLogged) {
      this.isAdmin = this.tokenService.isAdmin();
       this.descri = this.tokenService.getDescri();
    }
  }

  logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }
  cargarMenu(id: string): any {
    this.sidebarServices.getMenu(id).subscribe({
      next: (data) => {
        let menuItems = data.data;
        const uniquePadres = menuItems.filter(
          (menuItem: any, index: number, self: any[]) =>
            index === self.findIndex((t) => t.Padre === menuItem.Padre)
        );

        const hijosx = uniquePadres.map((padre: any) => {
          const hijos = menuItems.filter(
            (menuItem: any) => menuItem.Padre === padre.Padre
          );

          return { ...padre, hijos };
        });
        let menus: any[] = [];
        let hijos: any[] = [];
        hijosx.map((padre: any) => {
          padre.hijos.map((hijo: any) => {
            if (hijo.Padre == padre.Padre){
              hijos.push({ titulo: hijo.Descri, url:hijo.Descri /*hijo.Lnk*/, icono: 'fa fa-ellipsis-h'  });}
          });
          menus.push({ titulo: padre.Padre,icono: 'nav-icon fas fa-tachometer-alt', submenu:hijos });
          hijos= [];
        });
        //console.log(menus);
        this.menuItems= menus;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
