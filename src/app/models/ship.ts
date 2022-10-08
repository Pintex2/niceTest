export class Ship {
  name: string;
  width: number;

  constructor(name: string) {
    this.name = name;
    // this.setWidth();
    if (this.name == 'portaviones') {
      this.width = 5;
    } else if (this.name == 'acorazado') {
      this.width = 4;
    } else if (this.name == 'crucero') {
      this.width = 3;
    } else if (this.name == 'submarino') {
      this.width = 3;
    } else {
      this.width = 2;
    }
  }


  getWidth(){
    return this.width;
  }
}
