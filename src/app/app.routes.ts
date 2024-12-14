import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'formulario-profesor',
    loadComponent: () => import('./pages/formulario-profesor/formulario-profesor.page').then( m => m.FormularioProfesorPage)
  },
 
  {
    path: 'alumno',
    loadComponent: () => import('./pages/alumno/alumno.page').then( m => m.AlumnoPage)
  },
  {
    path: 'recovery-alumno',
    loadComponent: () => import('./pages/recovery-alumno/recovery-alumno.page').then( m => m.RecoveryAlumnoPage)
  },
  {
    path: 'docente',
    loadComponent: () => import('./pages/docente/docente.page').then( m => m.DocentePage)
  },
  {
    path: 'recovery-docente',
    loadComponent: () => import('./pages/recovery-docente/recovery-docente.page').then( m => m.RecoveryDocentePage)
  },
 

  {
    path: 'menu-alumno',
    loadComponent: () => import('./pages/menu-alumno/menu-alumno.page').then( m => m.MenuAlumnoPage)
   
  },
  {
    path: 'scan-qr',
    loadComponent: () => import('./pages/scan-qr/scan-qr.page').then( m => m.ScanQrPage)
  },
  {
    path: 'asistencia',
    loadComponent: () => import('./pages/asistencia/asistencia.page').then( m => m.AsistenciaPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'registro-alu',
    loadComponent: () => import('./registro-alu/registro-alu.page').then( m => m.RegistroAluPage)
  },



  
];
