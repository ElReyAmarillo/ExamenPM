import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Keyboard } from '@capacitor/keyboard';
import { Platform } from '@ionic/angular';

import { StatusBar } from '@capacitor/status-bar';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Ajustar contenido al aparecer el teclado
      Keyboard.setScroll({ isDisabled: false });

      // Agregar eventos del teclado
      Keyboard.addListener('keyboardWillShow', () => {
        document.body.classList.add('keyboard-open');
        console.log('El teclado se está mostrando');
      });

      Keyboard.addListener('keyboardDidHide', () => {
        document.body.classList.remove('keyboard-open');
        console.log('El teclado se ha ocultado');
      });
    });
  }
}



