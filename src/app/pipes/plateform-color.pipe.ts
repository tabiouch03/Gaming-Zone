import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'plateformColor' })

export class PlateformColorPipe implements PipeTransform {
  transform(name: string): string {

    let color: string;

    switch (name) {
      case 'PS4':
        color = 'badge-primary';
        break;
      case 'SWITCH':
        color = 'badge-danger';
        break;
      case 'XBOX':
        color = 'badge-success';
        break;
      case 'PC':
        color = 'badge-secondary';
        break;
    }

    return 'badge ' + color;
  }
}

