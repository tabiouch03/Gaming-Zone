import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from './game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games = [];

  constructor(private gameService: GameService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => {
      this.games = games;
      
    });
  }
}