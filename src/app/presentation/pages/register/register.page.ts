import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nombre: string = '';
  apellidos: string = '';
  tipoUsuario: string = '';
  grupo: string = '';
  grado: string = '';

  constructor(private router: Router) { }

  tiposUsuario = [
    { label: 'Profesor', value: 'Profesor' },
    { label: 'Alumno', value: 'Alumno' },
    { label: 'Padre de Familia', value: 'Padre de Familia' },
  ];

  onTipoUsuarioChange(event: any) {
    if (event.value === 'Profesor') {
      this.grupo = '';
      this.grado = '';
    }
  }

  onSubmit() {
    console.log('Nombre:', this.nombre);
    console.log('Apellidos:', this.apellidos);
    console.log('Tipo de Usuario:', this.tipoUsuario);
    if (this.tipoUsuario === 'Alumno' || this.tipoUsuario === 'Padre de Familia') {
      console.log('Grupo:', this.grupo);
      console.log('Grado Escolar:', this.grado);
    }
    this.router.navigateByUrl('/login');
  }

}
