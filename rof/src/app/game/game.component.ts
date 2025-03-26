import { Component } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  pickCardAnimation = false;
  game: Game = new Game();

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    this.pickCardAnimation = true;
    console.log(this.game)
  }
}
