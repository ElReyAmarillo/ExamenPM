import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonInput } from '@ionic/angular';
import { NavigationExtras, Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/user.service';  // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule, RouterModule]
})
export class AlumnoPage implements OnInit {
  @ViewChild('myInput', { static: false }) myInput!: IonInput;

  focusInput() {
    this.myInput.setFocus();
  }

  loginFormAlumno!: FormGroup;
  isDisabled: boolean = true;
  var_username: string = "";
  var_newpassword: string = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private retornoService: UserService  // Inyecta el servicio correctamente
  ) { 
    this.loginFormAlumno = this.fb.group({ 
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z0-9]*$')
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(12),
          Validators.pattern('^[a-zA-Z0-9]*$')
          
        ]
      ]
    });
  }

  onLogin() {
    if (this.loginFormAlumno.valid) {
      const username = this.loginFormAlumno.get('username')?.value;
      const password = this.loginFormAlumno.get('password')?.value;

      // Validar usuario y contraseña con el servicio
      const respuesta: boolean = this.retornoService.loginUser(username, password);

      if (respuesta) {  
        let navigationExtras: NavigationExtras = {
          state: {
            nombre: username
          }
        };
        this.router.navigate(['menu-alumno'], navigationExtras);
      } else {  
        alert('Usuario o Password incorrecta');
      }
    }
  }

  changeButton() {
    this.isDisabled = !this.isDisabled;
  }

  toClick() {
    const username = this.loginFormAlumno.get('username')?.value;
    this.router.navigate(['recovery-alumno'], { queryParams: { username } });
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();

    if (navigation?.extras.queryParams) {
      this.var_username = navigation.extras.queryParams['username'];
      this.var_newpassword = navigation.extras.queryParams['newpassword'];
    }
  }

}
