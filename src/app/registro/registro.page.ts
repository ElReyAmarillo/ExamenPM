import { Component, OnInit, ElementRef, NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule, RouterModule]
})
export class RegistroPage {

  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    if (this.authService.registerUser(this.username, this.password)) {
      alert ('Docente registrado con éxito');
      this.router.navigate(['docente']);
    } else {
      this.message = 'El usuario ya existe';
    }

  }

}
