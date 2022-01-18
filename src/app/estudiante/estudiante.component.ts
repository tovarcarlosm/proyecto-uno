import {Component, Input} from '@angular/core';
import { Estudiante } from "../modelos/estudiante.model";

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {

  @Input() estudiante: Estudiante = new Estudiante("","");
  @Input() indice: number = 0;
}
