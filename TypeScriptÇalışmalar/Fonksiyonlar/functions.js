function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(2, 3));
console.log(topla("Ankara", 2));
console.log(topla2(2, 4));
console.log(topla3(4, 8));
console.log(topla(2, 8));
function topla4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(topla4(3));
function topla5(x, y) {
    //opsiyonun ya da defaultun sonda olması gerek. x default olamaz.
    if (y) {
        return x + y;
    }
    return x;
}
console.log(topla5(3)); //y değeri verildiğinde direkt toplar.if y çalışır.
function topla6(x, y) {
    //opsiyonun ya da defaultun sonda olması gerek. x default olamaz.
    if (y) {
        return x + y;
    }
    return x;
}
console.log(topla6(3, 40)); //y değeri verildiğinde direkt toplar.if y çalışır.
//rest parametreler: aynı tipte alacağınız parametre/eleman sayısı belli değilse rest parametrelerden yararlanılır
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("Engin", "Derin", "Salih", "Ahmet"));
function davetEt2() {
    var digerleri = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        digerleri[_i] = arguments[_i];
    }
    return digerleri.join(" ");
}
console.log(davetEt2("Engin", "Derin", "Salih", "Ahmet"));
