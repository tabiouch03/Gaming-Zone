import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../../model/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games = [];

  constructor(
    private gameService: GameService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => {
      this.games = games;
    });
  }
  

  selectGame(game: Game): void {
    console.log('Vous avez selectionné ' + game.title);
    let link = ['games/' + game.id];
    this.router.navigate(link);
}

}

