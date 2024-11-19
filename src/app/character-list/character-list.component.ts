import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RickAndMortyService } from '../rick-and-morty.service';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule, // Asegúrate de que este módulo esté incluido
    MatPaginatorModule,
  ],
})
export class CharacterListComponent {
  characters: any[] = []; // Arreglo para almacenar los personajes

  constructor(
    private rickAndMortyService: RickAndMortyService, // Servicio para consumir la API
    private dialog: MatDialog // Servicio para manejar diálogos
  ) {
    this.loadCharacters(); // Carga los personajes al inicializar
  }

  // Método para cargar los personajes desde la API
  loadCharacters(): void {
    this.rickAndMortyService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data.results;
      },
      error: (err) => {
        console.error('Error al cargar los personajes:', err);
      },
    });
  }

  // Método para mostrar los detalles del personaje en un diálogo
  showDetails(characterId: number): void {
    this.dialog.open(CharacterDetailComponent, {
      width: '400px', // Tamaño del diálogo
      data: { id: characterId }, // Pasa el ID del personaje al componente de detalles
    });
  }
}

