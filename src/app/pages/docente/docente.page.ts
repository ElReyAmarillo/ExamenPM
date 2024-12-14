import { Component, OnInit, ElementRef, NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule, RouterModule]
})
export class DocentePage {
  loginFormAlumno! : FormGroup;
  isDisabled: boolean = true;
  var_username: String="";
  var_newpassword: String="";

  constructor(private fb:FormBuilder, 
              private router:Router,
              private retornoService: AuthService
              ) { 
this.loginFormAlumno=this.fb.group({ 

  username:[
    '',
    [
      Validators.required,      
      Validators.minLength(5),
      Validators.maxLength(10),
      Validators.pattern('^[a-zA-Z0-9]*$')
    ]
  ],

  password:[
    '',
    [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
      Validators.pattern('^[a-zA-Z0-9]*$')
    ]

  ]
});

  }

  onLogin() {
    if(this.loginFormAlumno.valid)
      {
        const username =this.loginFormAlumno.get('username')?.value;
        const password =this.loginFormAlumno.get('password')?.value;

        var respuesta: boolean=this.retornoService.loginUser(username,password)

        if (respuesta) {
          this.router.navigate( ['formulario-profesor'], { queryParams:{username,password} });          
            
        } else {
          alert('Usuario o Password no valida')
          this.changeButton();
          }
      }
  }

  changeButton() {
    this.isDisabled = !this.isDisabled;
  }

  toClick() {
    const username =this.loginFormAlumno.get('username')?.value;
    this.router.navigate( ['recovery-docente'], { queryParams:{username} });
  }

  ngOnInit() {
    const navigation =this.router.getCurrentNavigation();

    if(navigation?.extras.queryParams) {
      this.var_username=navigation.extras.queryParams['username'],
      this.var_newpassword=navigation.extras.queryParams['newpassword']
      
    }
  }
  
}