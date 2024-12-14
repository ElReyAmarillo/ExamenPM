import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoveryDocentePage } from './recovery-docente.page';

describe('RecoveryDocentePage', () => {
  let component: RecoveryDocentePage;
  let fixture: ComponentFixture<RecoveryDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
