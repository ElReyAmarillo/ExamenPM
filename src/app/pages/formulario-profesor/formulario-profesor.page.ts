import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { IonContent, IonHeader, IonTitle, 
IonToolbar, IonList, IonItem, IonLabel, 
IonButton, IonButtons, IonBackButton, 
  IonAvatar ,IonSelect, IonSelectOption,IonModal,IonImg } from '@ionic/angular/standalone'; 
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import {QRCodeModule} from 'angularx-qrcode';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-formulario-profesor',
  templateUrl: './formulario-profesor.page.html',
  styleUrls: ['./formulario-profesor.page.scss'],
  standalone: true,
imports: [IonAvatar, 
  IonBackButton, 
  IonButtons, 
  IonButton, 
    IonLabel, 
    IonItem, 
    IonList, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule,
     FormsModule, 
     IonSelect, 
     IonSelectOption,
     IonModal,
      IonImg, 
      RouterModule,
      QRCodeModule,
      ReactiveFormsModule] 
  
    /* imports: [IonicModule, RouterModule] */
})
export class FormularioProfesorPage implements OnInit {
      selectedSede: string | null = null;
      selectedJornada: string | null = null;
      selectedAsignatura: string | null = null;
      selectedSeccion: string | null = null;
      selectedDate: string | null = null;
      var_username: String="";
      


      constructor(private alertCtrl: AlertController, private router:Router,  private cdr: ChangeDetectorRef) {
        
      }
      
      isFormValid() {
        return this.selectedSede && this.selectedAsignatura && this.selectedSeccion;
      }
      
      async canDismiss(data?: any, role?: string) {
        return role !== 'gesture';
      }

    ngOnInit() {
      const navigation =this.router.getCurrentNavigation();

      if(navigation?.extras.queryParams) {
        this.var_username=navigation.extras.queryParams['username']    
        
      }
      this.selectedDate = new Date().toLocaleString();
    }

    qrData: string='';
    createdCode:string='';


    generateQRCode() {
      


      if(this.selectedSede && this.selectedJornada && this.selectedAsignatura && this.selectedSeccion){
        this.createdCode = `Sede: ${this.selectedSede} \nJornada: ${this.selectedJornada} \nAsignatura: ${this.selectedAsignatura} \nSeccion: ${this.selectedSeccion} \nFecha: ${this.selectedDate}`;
        this.cdr.detectChanges(); 
      }else{
        alert('Por favor complete todos los campos antes de generar el QR.');
      }
    }
}