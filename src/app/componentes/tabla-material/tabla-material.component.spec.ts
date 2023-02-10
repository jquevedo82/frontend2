import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMaterialComponent } from './tabla-material.component';

describe('TablaMaterialComponent', () => {
  let component: TablaMaterialComponent;
  let fixture: ComponentFixture<TablaMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
