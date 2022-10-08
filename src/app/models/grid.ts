import { Cell } from './cell';
import { Ship } from './ship';

export class Grid {
  list: any[];
  rows: number;
  cols: number;
  player?: string; //model

  constructor() {
    this.list = [];
    this.rows = 10;
    this.cols = 10;
    this.createGrid();
  }

  createGrid() {
    for (let x = 0; x < this.rows; x++) {
      let list2 = [];
      for (let y = 0; y < this.cols; y++) {
        let cell = new Cell();
        cell.setPosition(y, x);
        list2.push(cell);
      }
      this.list.push(list2);
    }
  }
  getList() {
    return this.list;
  }

  shot(col: number, row: number) {
    this.list[row][col].shot();
  }

  createShip(ships: Ship[]) {
    ships.forEach((ship) => {
      let isPosicionado = true;
      let direction = ['horizontal', 'vertical'];
      while (isPosicionado) {
      if (direction[Math.floor(Math.random() * 2)] == 'horizontal') {
        if (this.shipHorizontal(ship)) {
          console.log('horizontal');
          isPosicionado = false;
        }
      } else {
        if (this.shipVertical(ship)) {
          isPosicionado = false;
          console.log('vertical');
        }
      }
      }
    });
  }

  shipVertical(ship: Ship) {
    let width = ship.getWidth();
    let inicioRow = Math.floor(Math.random() * (this.rows - width));
    let inicioCol = Math.floor(Math.random() * this.cols);
    for (let x = 0; x < width; x++) {
      if (this.list[inicioRow + x][inicioCol].getHasAship()) {
        return false;
      }
    }
    for (let x = 0; x < width; x++) {
      this.list[inicioRow + x][inicioCol].setIsShip();
    }
    return true;
  }

  shipHorizontal(ship: Ship) {
    let width = ship.getWidth();

    let inicioCol = Math.floor(Math.random() * (this.cols - width));
    let inicioRow = Math.floor(Math.random() * this.rows);
    for (let x = 0; x < width; x++) {
      if (this.list[inicioRow][inicioCol + x].getHasAship()) {
        return false;
      }
    }
    for (let x = 0; x < width; x++) {
      this.list[inicioRow][inicioCol + x].setIsShip();
    }
    return true;
  }
  //   showTable() {
  //     console.log(this.list);
  //   }
  //   selectSquare(i: any, j: any) {
  //     console.log(i, j);
  //     this.list[i][j] = 'A';
  //   }
}
