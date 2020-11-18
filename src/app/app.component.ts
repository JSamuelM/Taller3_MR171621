import { Component } from '@angular/core';
import { Persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Taller3-MR171621';

  personas: Persona[] = [
    { id: 1, nombre: 'Ricardo', apellido: 'Moya', edad: 28 },
    { id: 2, nombre: 'Ramón', apellido: 'Invarato', edad: 28 },
    { id: 3, nombre: 'Pepe', apellido: 'Moreno', edad: 40 },
    { id: 4, nombre: 'Paco Pepe', apellido: 'Gonzalez', edad: 32 },
  ];

  // Para seleccionar una persona de tipo Persona y almacenar un objeto
  selectPersona: Persona = { id: 0, nombre: '', apellido: '', edad: 0 };

  // Recibe como parametro una variable de tipo Persona, para ser almacenada en selectPersona
  selectedPersona(persona: Persona) {
    this.selectPersona = persona;
    console.log(persona);
  }

  // Método para guardar persona o seleccionar una
  agregarEditarPersona() {
    // Guardara una persona si no se ha seleccionado nada aún
    if (this.selectPersona.id === 0) {
      this.selectPersona.id = this.personas.length + 1;
      this.personas.push(this.selectPersona);
    }
    this.selectPersona = { id: 0, nombre: '', apellido: '', edad: 0 };
  }

  // Método para eliminar una persona
  eliminarPersona() {
    if (confirm('¿Esta seguro de eliminar el Registro?')) {
      // metodo filter, nos permite filtrar elementos de un array
      this.personas = this.personas.filter(
        (person) => person != this.selectPersona
      );
      this.selectPersona = { id: 0, nombre: '', apellido: '', edad: 0 };
    }
  }
}
