import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaComentarioComponent } from './tarjeta-comentario.component';

describe('TarjetaComentarioComponent', () => {
  let component: TarjetaComentarioComponent;
  let fixture: ComponentFixture<TarjetaComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaComentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
