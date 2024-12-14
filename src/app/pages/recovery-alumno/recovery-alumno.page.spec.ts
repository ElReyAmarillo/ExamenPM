import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoveryAlumnoPage } from './recovery-alumno.page';

describe('RecoveryAlumnoPage', () => {
  let component: RecoveryAlumnoPage;
  let fixture: ComponentFixture<RecoveryAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
