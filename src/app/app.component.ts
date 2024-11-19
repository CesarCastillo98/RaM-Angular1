import { Component } from '@angular/core';
import { CharacterListComponent } from './character-list/character-list.component';

@Component({
  selector: 'app-root',
  standalone: true, // Especifica que es standalone
  template: '<app-character-list></app-character-list>', // Renderiza la lista de personajes
  imports: [CharacterListComponent], // Importa componentes standalone necesarios
})
export class AppComponent {}
