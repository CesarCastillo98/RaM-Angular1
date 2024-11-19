import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RickAndMortyService } from '../rick-and-morty.service';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent {
  character: any; // Detalles del personaje

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private rickAndMortyService: RickAndMortyService
  ) {
    this.loadCharacterDetails(); // Carga los detalles al inicializar
  }

  loadCharacterDetails(): void {
    this.rickAndMortyService.getCharacterDetails(this.data.id).subscribe({
      next: (data) => {
        this.character = data; // Asigna los detalles del personaje
      },
      error: (err) => {
        console.error('Error al cargar los detalles del personaje:', err);
      },
    });
  }
}
