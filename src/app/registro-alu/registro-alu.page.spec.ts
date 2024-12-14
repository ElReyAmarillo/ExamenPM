import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAluPage } from './registro-alu.page';

describe('RegistroAluPage', () => {
  let component: RegistroAluPage;
  let fixture: ComponentFixture<RegistroAluPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAluPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
