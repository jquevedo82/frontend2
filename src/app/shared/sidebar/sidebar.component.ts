import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLogged: boolean = false;
  isAdmin: boolean = false;
  username : string = '';
  constructor(private tokenService: TokenService, private router: Router) {}


   

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();

    this.isAdmin = this.tokenService.isAdmin();

    this.username = this.tokenService.getUserName();
  }

}
