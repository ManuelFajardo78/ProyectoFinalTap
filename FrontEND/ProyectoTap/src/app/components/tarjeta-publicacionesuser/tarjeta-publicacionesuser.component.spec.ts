import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPublicacionesuserComponent } from './tarjeta-publicacionesuser.component';

describe('TarjetaPublicacionesuserComponent', () => {
  let component: TarjetaPublicacionesuserComponent;
  let fixture: ComponentFixture<TarjetaPublicacionesuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPublicacionesuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPublicacionesuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
