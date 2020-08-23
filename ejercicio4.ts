class Calculadora{
  numero1: number;
  numero2: number;
  constructor(num1: number, num2: number) {
    this.numero1 = num1;
    this.numero2 = num2;
  }

  Operaciones() {
    let suma = this.numero1 + this.numero2;
    let resta = this.numero1 - this.numero2;
    let multiplicacion = this.numero1 * this.numero2;
    let division = this.numero1 / this.numero2;
    console.log(`Suma: ${this.numero1} + ${this.numero2} = ${suma.toFixed(4)}`);
    console.log(`Resta: ${this.numero1} - ${this.numero2} = ${resta.toFixed(4)}`);
    console.log(`Multiplicación: ${this.numero1} x ${this.numero2} = ${multiplicacion.toFixed(4)}`);
    console.log(`División: ${this.numero1} / ${this.numero2} = ${division.toFixed(4)}`);
  }
}

const op: Calculadora = new Calculadora(12, 4);
op.Operaciones();