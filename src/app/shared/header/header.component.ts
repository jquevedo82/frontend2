import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  isAdmin: boolean = false;

  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();

    this.isAdmin = this.tokenService.isAdmin();
  }

  logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }
}