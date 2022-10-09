import { Cell } from './cell';
import { Ship } from './ship';

export class Grid {
  list: any[];
  rows: number;
  cols: number;
  numbersOfShips:number=5;
  player?: string; //model
  listRowsCoordenatesShips: number[]; //lista de las coordenadas de los barcos en el grid
  listColsCoordenatesShips: number[];

  constructor() {
    this.list = [];
    this.rows = 10;
    this.cols = 10;
    this.createGrid();
    this.listRowsCoordenatesShips = [];
    this.listColsCoordenatesShips = [];
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

  shot(row: number, col: number) {
    this.list[row][col].shot();
  }

  createShip(ships: Ship[]) {
    ships.forEach((ship) => {
      let isPosicionado = true;
      let direction = ['horizontal', 'vertical'];
      while (isPosicionado) {
        if (direction[Math.floor(Math.random() * 2)] == 'horizontal') {
          if (this.shipHorizontal(ship)) {
            isPosicionado = false;
          }
        } else {
          if (this.shipVertical(ship)) {
            isPosicionado = false;
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
      this.listRowsCoordenatesShips.push(inicioRow + x);
      this.listColsCoordenatesShips.push(inicioCol);
      this.list[inicioRow + x][inicioCol].setNameShip(ship.name);
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
      this.listRowsCoordenatesShips.push(inicioRow);
      this.listColsCoordenatesShips.push(inicioCol + x);
      this.list[inicioRow][inicioCol + x].setNameShip(ship.name);
      this.list[inicioRow][inicioCol + x].setIsShip();
    }
    return true;
  }

  verifySunkenShip(i: number, j: number) {
    let width = this.getWidthByNameShip(this.list[i][j].getNameShip());
    let init = this.getInitPositionOfShip(this.list[i][j].getNameShip());
    let shipsinked = 0;
    for (let x = init; x < width + init; x++) {
      if (
        this.list[this.listRowsCoordenatesShips[x]][
          this.listColsCoordenatesShips[x]
        ].state == 'inactive'
      ) {
        shipsinked++;
      }
    }
    if (shipsinked == 0) {
      for (let x = init; x < width + init; x++) {
        this.list[this.listRowsCoordenatesShips[x]][
          this.listColsCoordenatesShips[x]
        ].state = 'hundido';
      }
      this.numbersOfShips=this.numbersOfShips-1;
    }
  }
  getInitPositionOfShip(nameShip: string) {
    if (nameShip == 'portaviones') {
      return 0;
    } else if (nameShip == 'acorazado') {
      return 5;
    } else if (nameShip == 'crucero') {
      return 9;
    } else if (nameShip == 'submarino') {
      return 12;
    } else {
      return 15;
    }
  }
  getWidthByNameShip(name: string) {
    if (name == 'portaviones') {
      return 5;
    } else if (name == 'acorazado') {
      return 4;
    } else if (name == 'crucero') {
      return 3;
    } else if (name == 'submarino') {
      return 3;
    } else {
      return 2;
    }
  }
  //   showTable() {
  //     console.log(this.list);
  //   }
  //   selectSquare(i: any, j: any) {
  //     console.log(i, j);
  //     this.list[i][j] = 'A';
  //   }
}
