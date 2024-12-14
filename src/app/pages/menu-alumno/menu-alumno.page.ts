import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { addIcons } from 'ionicons';
import { IonicModule } from '@ionic/angular';
import { home,informationCircleOutline,helpCircleSharp,gitNetworkOutline,calendarOutline,location,qrCodeOutline,scan  } from 'ionicons/icons';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-menu-alumno',
  templateUrl: './menu-alumno.page.html',
  styleUrls: ['./menu-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule,RouterModule]
})
export class MenuAlumnoPage implements OnInit {
  var_username: String="";
  constructor(private router: Router) {
    addIcons({ home,     'qr-code-outline':qrCodeOutline,
      'qr-scanner':scan ,
      'information-circle-outline': informationCircleOutline,  
      'help-circle-sharp': helpCircleSharp, 
      'git-network-outline': gitNetworkOutline,
      'calendar-outline':calendarOutline 
    })
  }



  ngOnInit() {
    const navigation =this.router.getCurrentNavigation();

    if(navigation?.extras.queryParams) {
      this.var_username=navigation.extras.queryParams['username'] 
  }
}
}
