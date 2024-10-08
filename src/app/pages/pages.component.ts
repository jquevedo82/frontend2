import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __makeTemplateObject } from 'tslib';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  isLogged: boolean = false;
  isAdmin: boolean = false;

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {

    console.log("inicio pages");
    this.isLogged = this.tokenService.isLogged();


    this.isAdmin = this.tokenService.isAdmin();
  }

}
