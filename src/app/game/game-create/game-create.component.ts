import { Component, OnInit } from '@angular/core';
import { Game } from '../../model/game.model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  game: Game = {
    id:0,
    title: '',
    genre: '',
    cover: '',
    average: 0,
    resume: '',
    trailer: '',
    editor:'',
    available: true,
    plateform: '',
    testimg: '',
    testimg1: '',
    testimg2: '',
    testimg3: '',
    testimg4: '',
    description: '',
    description1: '',
    description2: '',
    description3: '',


  }

  isSubmit = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  saveGame() {
    const data = {
      id: this.game.id,
      title: this.game.title,
      genre: this.game.genre,
      cover: this.game.cover,
      average: this.game.average,
      resume: this.game.resume,
      available: this.game.available,
      trailer: this.game.trailer,
      editor: this.game.editor,
      plateform: this.game.plateform,
      testimg: this.game.testimg,
      testimg1: this.game.testimg1,
      testimg2: this.game.testimg2,
      testimg3: this.game.testimg3,
      testimg4: this.game.testimg4,
      description: this.game.description,
      description1: this.game.description1,
      description2: this.game.description2,
      description3: this.game.description3,

    }

    this.gameService.createGame(data).subscribe(result => {
      this.isSubmit = true;
    }, error => {
      console.log(error);
    });
  }

  newGame() {
    this.isSubmit = false;
    this.game = {
      id: 0,
      title: '',
      genre: '',
      cover: '',
      average: 0,
      resume: '',
      available: true,
      trailer: '',
      editor:'',
      plateform: '',
      testimg: '',
      testimg1: '',
      testimg2: '',
      testimg3: '',
      testimg4: '',
      description: '',
      description1: '',
      description2: '',
      description3: '',

    }
  }

}
