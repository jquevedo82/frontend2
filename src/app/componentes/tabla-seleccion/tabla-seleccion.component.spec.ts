import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSeleccionComponent } from './tabla-seleccion.component';

describe('TablaSeleccionComponent', () => {
  let component: TablaSeleccionComponent;
  let fixture: ComponentFixture<TablaSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaSeleccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
