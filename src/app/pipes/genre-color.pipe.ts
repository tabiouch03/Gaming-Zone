import { Pipe, PipeTransform } from '@angular/core';

// Decorateur Pipe et on défini le nom que l'on va utiliser pour l'utiliser
@Pipe({ name: 'genreColor' })

export class GenreColorPipe implements PipeTransform {
  // On transform une chaine de caractere en une autre chaine de caractere 
  transform(genre: string): string {

    // La couleur sera une chaine de caractere
    let color: string;

    // On defini le switch pour tout les cas de genre possible
    switch (genre) {
      case 'RPG':
        color = 'badge-primary';
        break;
      case 'SPORT':
        color = 'badge-danger';
        break;
      case 'MMO':
        color = 'badge-secondary';
        break;
    }
    // Exemple pour le cas RPG ce qui sera return sera une string que l'on pourra
    // utiliser dans une class pour appliquer le style bootstrap badge badge-primary 
    return 'badge ' + color;
  }
}


