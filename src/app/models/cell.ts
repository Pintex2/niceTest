export class Cell {

    state:string;
    col?:number;
    row?:number;
    hasAship:boolean;
    nameShip?:string;
    widthShip?:number;
    
    constructor(){
      this.state="inactive";
      this.hasAship=false;
    }

    setPosition(col: number,row: number){
        this.col= col;
        this.row =row;
    }
    setNameShip(nameShip:string){
        this.nameShip=nameShip;
    }
    getNameShip(){
        return this.nameShip;
    }
    getWidthShip(){
        return this.widthShip;
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
