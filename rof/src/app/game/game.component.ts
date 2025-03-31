import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined;
  game: Game = new Game();

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
  }

  // takeCard() {
  //   if (!this.pickCardAnimation) {
  //     this.currentCard = this.game.stack.pop();
  //     this.pickCardAnimation = true;
  //     this.game.playedCard.push(this.currentCard);

  //     setTimeout(() => {
  //       this.pickCardAnimation = false;
  //     }, 1000);
  //   }
  // }

  takeCard() {
    const card = this.game.stack.pop();

    if (card !== undefined) {
      this.currentCard = card;
      this.pickCardAnimation = true;
      this.game.playedCard.push(card);

      setTimeout(() => {
        this.pickCardAnimation = false;
      }, 1000);
    }
  }

  // takeCard() {
  //   if (this.game.stack.length > 0) {
  //     this.currentCard = this.game.stack.pop()!;
  //     this.pickCardAnimation = true;
  //   } else {
  //     this.currentCard = '';
  //     console.warn('Keine Karten mehr im Stapel.');
  //   }
  //   console.log(this.game);
  // }
}