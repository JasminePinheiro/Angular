var minhaVar = 'minha variavel';
console.log(minhaVar);
function minhaFunc(x, y) {
    return x + y;
}
console.log(minhaFunc(2, 5));
//ES 6 ou ES 2015
var num = 2;
var PI = 3.14;
console.log(num);
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); // ES 6 ou ES 2015  
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
