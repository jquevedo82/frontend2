import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo?:string;
  public urltitulo?:string;
  public Subtitulo?:string;
  public tituloSubs$:Subscription;

  constructor(private router: Router ) {

    this.tituloSubs$ = this.getArguments().subscribe(({titulo,Subtitulo,urltitulo})=>
      {
        this.titulo = titulo;
        this.Subtitulo = Subtitulo;
        this.urltitulo = urltitulo;
        document.title = `Neumen - ${titulo}`;

      })

   }

  ngOnDestroy(): void{

    this.tituloSubs$.unsubscribe();

  }

  getArguments(){

    return this.router.events.pipe(

      filter((event:any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd ) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)

    )

  }



}
