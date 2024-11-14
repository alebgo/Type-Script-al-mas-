function selamVer(isim) {
    return "Merhaba " + isim;
}
var mesaj = selamVer('Ebru 2');
console.log(mesaj);
var sayi = 12;
sayi = 10;
sayi = 10.4;
var sehir = "Adana";
sehir = "Ankara";
sehir = "İstanbul";
var dogruMu = true; //mantıksal ifadelerde kullanılır(true-false)
dogruMu = false;
dogruMu = true;
var sayilar = [1, 2, 3];
var sayilar2 = [1, 2, 3, "Adana"];
var sayilar3 = [1, 2, 3, 4];
var dizi = [2, "Ankara"]; //toople : ben aynı anda bir dizinin içine şöyle bir tanım yapıcam.
dizi[0];
dizi[1];
//enum:örn veritabanınnda sizin 5 tane şehirde ofisin var. veritabanında tutulması gerek.programlarken magic string denen bir olay var. enam lar magic stringlerden kurtulmak için kullanılır.çok fazla ankara şehrinin gazi ankara olarak değiştirmeye kalkışırsak çok fazla kod işlemiyle uğraşmak zorunda kalırız. bizi bu yükten kurttarıyor.
//enum Renkler //class mantğındadır. pascal case dediğimiz büyük harf ile başlar.
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
//any=herhangi. bize gelecek olan datanın veritipinden emin olmadığımız vakitler kullanırız.
var deger = "Ankara";
deger = 2;
deger = {};
//void aslnda birnevi özellikle bir şey döndürmek istemiyoruz fonksiyonumuzda.
var deger2 = undefined;
function selamVer2() {
    console.log("Merhaba");
}
//undefined-null birbiriyle karışır genelde.Null referans tiplerde kullanılır.
var yas; //undefined(değer atmadın yani.
yas = 10; //şu an undefined değil
var Musteri = /** @class */ (function () {
    function Musteri() {
    }
    return Musteri;
}());
