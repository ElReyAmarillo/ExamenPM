import { Component, OnInit, ElementRef, NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-registroAlu',
  templateUrl: './registro-alu.page.html',
  styleUrls: ['./registro-alu.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule, RouterModule]
})
export class RegistroAluPage {

  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private userService: UserService, private router: Router) { }

  register() {
    if (this.userService.registerUser(this.username, this.password)) {
      alert('Alumno registrado con éxito');
      this.router.navigate(['alumno']);
    } else {
      this.message = 'El usuario ya existe';
    }

  }

}
