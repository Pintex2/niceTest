import { Component } from '@angular/core';
import { Grid } from './models/grid';
import { Ship } from './models/ship';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  ships: Ship[] = [//del mas grande al mas chico
    new Ship('portaviones'),
    new Ship('acorazado'),
    new Ship('crucero'),
    new Ship('submarino'),
    new Ship('destructor'),
  ];
  showGrid:boolean=false;


  grid1 = new Grid();
  grid2 = new Grid();

  constructor() {
    this.grid1.createShip(this.ships);
    // this.grid2.createShip(this.ships);
  }

  selectInactive(col: number, row: number) {
    this.grid1.shot(col, row);
  }
  startGame(){
    this.showGrid=true;
  }


}
