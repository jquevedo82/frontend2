import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacturasComponent } from './facturas/facturas.component';
import { PagesComponent } from './pages.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteGuard } from './cliente/guards/cliente.guard';
import { LoginGuard } from '../auth/guards/login.guard';
import { NopageFoundComponent } from '../nopage-found/nopage-found.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    // canActivate: [LoginGuard],
    data: { titulo: 'Home', urltitulo: '/' },
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { titulo: 'Home', urltitulo: 'no' },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { titulo: 'Home', urltitulo: 'no' },
      },
      {
        path: 'cliente',
        loadChildren: () =>
          import('../pages/cliente/cliente.module').then(
            (m) => m.ClienteModule
          ),
      },
      {
        path: 'productos',
        component: ProductosComponent,
        data: { titulo: 'Productos', urltitulo: 'no' },
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('../pages/usuario/usuario.module').then(
            (m) => m.UsuarioModule
          ),
      },
      {
        path: 'facturas',
        component: FacturasComponent,
        data: { titulo: 'Facturas', urltitulo: 'no' },
      },
      {
        path: 'not-found',
        component: NopageFoundComponent,
        data: { titulo: 'Facturas', urltitulo: 'no' },
      },
      { path: '**', redirectTo: 'not-found' },
    ],
  },
];

/*
const routes: Routes = [
  { path: 'dashboard', component: PagesComponent},
  { path: 'cliente', loadChildren: () => import('../pages/cliente/cliente.module').then( m => m.ClienteModule) },

];
*/
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
