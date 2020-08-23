var Calculadora = /** @class */ (function () {
    function Calculadora(num1, num2) {
        this.numero1 = num1;
        this.numero2 = num2;
    }
    Calculadora.prototype.Operaciones = function () {
        var suma = this.numero1 + this.numero2;
        var resta = this.numero1 - this.numero2;
        var multiplicacion = this.numero1 * this.numero2;
        var division = this.numero1 / this.numero2;
        console.log("Suma: " + this.numero1 + " + " + this.numero2 + " = " + suma.toFixed(4));
        console.log("Resta: " + this.numero1 + " - " + this.numero2 + " = " + resta.toFixed(4));
        console.log("Multiplicaci\u00F3n: " + this.numero1 + " x " + this.numero2 + " = " + multiplicacion.toFixed(4));
        console.log("Divisi\u00F3n: " + this.numero1 + " / " + this.numero2 + " = " + division.toFixed(4));
    };
    return Calculadora;
}());
var op = new Calculadora(12, 4);
op.Operaciones();
