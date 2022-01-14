import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre: string = "Carlos";
  identificacion: string = "1234";
  genero: string = "M";
  private edad: number = 5;
  profesion: string = "Sin profesión";

  deshabilitar: boolean = false;
  mensaje: string = "Listado vacío";

  mostrar: boolean = false;

  // getters and setters
  getEdad():number{
    return this.edad;
  }

  agregarPersona(){
    this.mostrar = true;
    this.mensaje = "Persona agregada";
  }

  /*modificarProfesion(event: Event){
    this.profesion = (<HTMLInputElement>event.target).value;
  }*/
}
