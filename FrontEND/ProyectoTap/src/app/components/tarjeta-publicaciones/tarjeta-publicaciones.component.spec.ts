import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPublicacionesComponent } from './tarjeta-publicaciones.component';

describe('TarjetaPublicacionesComponent', () => {
  let component: TarjetaPublicacionesComponent;
  let fixture: ComponentFixture<TarjetaPublicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaPublicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
