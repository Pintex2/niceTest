import { Component } from '@angular/core';
import { Grid } from './models/grid';
import { Ship } from './models/ship';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  labelsHorizontal = ['',1,2,3,4,5,6,7,8,9,10];
  labelsVertical = ['A','B','C','D','E','F','G','H','I','J'];
  playerTurn: number = 1;
  startgame:boolean=false;
  ships: Ship[] = [
    //del mas grande al mas chico
    new Ship('portaviones'),
    new Ship('acorazado'),
    new Ship('crucero'),
    new Ship('submarino'),
    new Ship('destructor'),
  ];
  showGrid: boolean = false;

  grid1 = new Grid();
  grid2 = new Grid();

  constructor() {
    this.grid1.createShip(this.ships);
    this.grid2.createShip(this.ships);
  }

  selectInactive(row: number, col: number) {
    if (this.playerTurn == 2) {
      this.grid1.shot(row, col);
      if (this.grid1.list[row][col].hasAship) {
        this.grid1.verifySunkenShip(row, col);
      }
      if (this.grid1.numbersOfShips == 0 ) {
          alert('jugador 1 ganaste');
          window.location.reload();
      } else {
        alert("turno del siguiente jugador")
        this.changeTurn();
      }
    }else{
      this.grid2.shot(row, col);
      if (this.grid2.list[row][col].hasAship) {
        this.grid2.verifySunkenShip(row, col);
      }
      if (this.grid2.numbersOfShips == 0) {
        alert('jugador 2 ganaste');
      } else {
        alert("turno del siguiente jugador")
        this.changeTurn();
      }
    }
  }
  //verificarshot hundido del barco
  changeTurn() {
    if (this.playerTurn == 1) {
      this.playerTurn = 2;
    } else {
      this.playerTurn = 1;
    }
  }
  startGame() {
    this.showGrid = true;
    this.startgame=true;
  }
}
