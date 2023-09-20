import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Busqueda2Component } from './busqueda2.component';

describe('Busqueda2Component', () => {
  let component: Busqueda2Component;
  let fixture: ComponentFixture<Busqueda2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Busqueda2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Busqueda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
