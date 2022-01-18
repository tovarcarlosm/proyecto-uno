import { Component } from '@angular/core';
import {Estudiante} from "./modelos/estudiante.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Proyecto Uno: Fundamentos de Angular';

  estudiantes: Estudiante[] = [
    new Estudiante("Pepito", "Pérez"),
    new Estudiante("María", "Rojas"),
    new Estudiante("Juan", "Torres"),
    new Estudiante("Luisa", "Castro")
  ]

  actualizarArreglo(estudiante: Estudiante){
    this.estudiantes.push( estudiante );
  }

}
