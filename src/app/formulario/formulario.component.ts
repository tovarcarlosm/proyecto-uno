import {Component, EventEmitter, Output} from '@angular/core';
import {Estudiante} from "../modelos/estudiante.model";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() estudianteFormulario = new EventEmitter<Estudiante>();

  nombreInput:string = "";
  apellidoInput:string = "";

  agregar(){
    let estudiante = new Estudiante(this.nombreInput, this.apellidoInput);
    this.estudianteFormulario.emit(estudiante);
  }
}
