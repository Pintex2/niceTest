export class Cell {

    state:string;
    col?:number;
    row?:number;
    hasAship:boolean;
    
    constructor(){
      this.state="inactive";
      this.hasAship=false;
    }

    setPosition(col: number,row: number){
        this.col= col;
        this.row =row;
    }

    getHasAship(){
        return this.hasAship;
    }

    setIsShip(){
        this.hasAship = true;
    }

    shot(){
        if(this.hasAship){
            this.state = 'successfull'
        }else{
            this.state = 'miss'
        }
    }
}
