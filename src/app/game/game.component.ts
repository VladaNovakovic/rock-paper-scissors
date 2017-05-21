import { Component, OnInit } from '@angular/core';
import Game from '../../types/Game';

@Component({
  selector: 'rps-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.scss']
})

export class GameComponent implements OnInit {
  game: Game;

  constructor() {
      this.game = new Game('Player 1', 'Computer 2');
  }

  startLoop = () => {
      this.game.startRound();
  }

  stopLoop = () => {
      this.game.endRound();
  }

  startNewGame = () => {
    this.game = new Game('Player 1', 'Computer 2');
  }

  ngOnInit() {
    console.log('Hello Game');
  }
}
