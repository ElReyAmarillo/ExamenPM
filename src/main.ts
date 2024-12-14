import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { Keyboard } from '@capacitor/keyboard';
import { environment } from './environments/environment';

if (!environment.production) {
  console.log('Modo de desarrollo activado');
}


Keyboard.addListener('keyboardWillShow', () => {
  // Agregar una clase al body cuando el teclado aparece
  document.body.classList.add('keyboard-open');
});

Keyboard.addListener('keyboardWillHide', () => {
  // Quitar la clase del body cuando el teclado desaparece
  document.body.classList.remove('keyboard-open');
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
