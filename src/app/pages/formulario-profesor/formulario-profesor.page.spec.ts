import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioProfesorPage } from './formulario-profesor.page';

describe('FormularioProfesorPage', () => {
  let component: FormularioProfesorPage;
  let fixture: ComponentFixture<FormularioProfesorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
