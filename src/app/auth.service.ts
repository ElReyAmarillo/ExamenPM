import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private storageKey = 'users'; // Clave para guardar usuarios

  constructor() {}

  // Registrar un usuario
  registerUser(username: string, password: string): boolean {
    const users = this.getUsers();
    if (users.find((user: any) => user.username === username)) {
      return false; // El usuario ya existe
    }

    // Encriptar la contraseña (hash básico, no recomendado para producción)
    const hashedPassword = btoa(password); 

    users.push({ username, password: hashedPassword });
    localStorage.setItem(this.storageKey, JSON.stringify(users));
    return true;
  }

  // Autenticar un usuario
  loginUser(username: string, password: string): boolean {
    const users = this.getUsers();
    const hashedPassword = btoa(password);

    const user = users.find(
      (user: any) =>
        user.username === username && user.password === hashedPassword
    );

    return !!user; // Retorna true si el usuario existe
  }

  // Obtener todos los usuarios internos
  private getUsers(): any[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }
}