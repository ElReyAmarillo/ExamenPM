import { Component, OnInit, ElementRef, NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-recovery-alumno',
  templateUrl: './recovery-alumno.page.html',
  styleUrls: ['./recovery-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule, RouterModule]
})
export class RecoveryAlumnoPage implements OnInit {

  var_username: String="";
  var_password: String="";
  loginFormAlumno! : FormGroup;
  isDisabled: boolean = true;

  

  constructor(private fb:FormBuilder, private router:Router) { 
    this.loginFormAlumno=this.fb.group({ 
    
      username:[
        '',
        [
          Validators.required,      
          Validators.minLength(10),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z0-9]*$')
        ]
      ],
    
      newpassword:[
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
          Validators.pattern('^[a-zA-Z0-9]*$')
        ]
    
      ]
    });
    
      }

  ngOnInit() {
    const navigation =this.router.getCurrentNavigation();

    if(navigation?.extras.queryParams) {
      this.var_username=navigation.extras.queryParams['username']
    }
  }  

  onLogin() {
    if(this.loginFormAlumno.valid)
      {        
        this.changeButton();
        
      } else {
          console.error('No valido')
      }
  }

  toClick() {
    if(this.loginFormAlumno.valid){
      const username =this.loginFormAlumno.get('username')?.value;
      const newpassword =this.loginFormAlumno.get('newpassword')?.value;
      this.router.navigate( ['alumno'], { queryParams:{username, newpassword} });

    }
    
  }

  changeButton() {
    this.isDisabled = !this.isDisabled;
  }
  
}