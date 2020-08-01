import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})

export class GameDetailComponent implements OnInit {
  currentGame = null;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private rotuer: Router
  ) { }

  ngOnInit(): void {
    this.getGameById(this.route.snapshot.paramMap.get('id'))
  }

  getGameById(id) {
    this.gameService.getGameById(id).subscribe(game => {
      this.currentGame = game;
    }, error => {
      console.log(error)
    })
  }

}
