var Rombo = /** @class */ (function () {
    function Rombo(Diagvertical, Diaghorizontal) {
        this.DiagonalVertical = Diagvertical;
        this.DiagonalHorizontal = Diaghorizontal;
    }
    Rombo.prototype.area = function () {
        var res = this.DiagonalVertical * this.DiagonalHorizontal;
        return res;
    };
    return Rombo;
}());
var rombo = new Rombo(7, 4);
var resultado = rombo.area();
console.log("El area del rombo es: " + resultado);
