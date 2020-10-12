import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesuserComponent } from './publicacionesuser.component';

describe('PublicacionesuserComponent', () => {
  let component: PublicacionesuserComponent;
  let fixture: ComponentFixture<PublicacionesuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
