class Rombo{
  DiagonalVertical: number;
  DiagonalHorizontal: number;

  constructor(Diagvertical: number, Diaghorizontal: number) {
    this.DiagonalVertical = Diagvertical;
    this.DiagonalHorizontal = Diaghorizontal;
  }

  area():number {
    let res = this.DiagonalVertical * this.DiagonalHorizontal;
    return res;
  }
}

const rombo: Rombo = new Rombo(7, 4);
let resultado: number = rombo.area();
console.log(`El area del rombo es: ${resultado}`);