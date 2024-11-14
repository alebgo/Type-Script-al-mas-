//generics: jenerikler
//veritabani:api 
//genericslerle tekrar taekrar zahmetinden kurtulmak hem  de tip güvenli dediğimiz modelle çalışmayı sağlıyoruz.
function deger(x) {
    return x;
}
function deger2(x) {
    return x;
}
var sayi = deger(10);
console.log(sayi);
var sehir = deger2("Ankara");
console.log(sehir);
//tsc typescript compiler
