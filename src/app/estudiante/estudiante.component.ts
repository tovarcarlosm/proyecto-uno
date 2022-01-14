import { Component } from '@angular/core';
import { Estudiante } from "../modelos/estudiante.model";

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {

  estudiantes: Estudiante[] = [
    new Estudiante("Pepito", "Pérez"),
    new Estudiante("María", "Rojas"),
    new Estudiante("Juan", "Torres"),
    new Estudiante("Luisa", "Castro")
  ]

  nombreInput:string = "";
  apellidoInput:string = "";

  agregar(){
    let estudiante = new Estudiante(this.nombreInput, this.apellidoInput);
    this.estudiantes.push( estudiante );
  }
}
