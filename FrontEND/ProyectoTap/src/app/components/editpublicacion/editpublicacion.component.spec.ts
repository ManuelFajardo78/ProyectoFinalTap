import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpublicacionComponent } from './editpublicacion.component';

describe('EditpublicacionComponent', () => {
  let component: EditpublicacionComponent;
  let fixture: ComponentFixture<EditpublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpublicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
