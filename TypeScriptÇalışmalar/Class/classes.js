var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class nesne diye de adlandırabileceğimiz yapı. içerisinde n-caplucation dan tutun farklı tekniklere kadar bir çok özelliği beraberinde getirir.
//classlar yani nesneler hem özellikleri hem de içerisinde operasyonları yani yapılacak işleri barındıran yapılar.
//sürdürülebilir yazılım:gündelik hayatta nasıl değişim varsa yazılım yani programımızzda da devamlı bi değişim olacaktır. sürdürülebilir yazılımlar için miras inheritance ve implemantation gibi avantajları getirir classlar.
//classlar pascal case büyük harfle başlar.
var Ev = /** @class */ (function () {
    //constructer:yapıcı blok.classlar bir referans tiptir. arrayler gibi.bir classtan bunu(Ev clasını) kullanablmeniz için ondan bir instance(örnek) üretmeniz gerek.newlwmw işlemi gerek.
    function Ev(odaSayisi, pencereSayisi, kat) {
        this._odaSayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat = kat;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + " katlı evde yemek yiyildi...");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
ev.yemekYe();
//ctrl+c ile çalışan kod durdurulur.
console.log(ev._kat);
//field=alan
//inheritance:miras //nesnelerin ortak özelliklerinin birbirirnin yerine tekrarlamadan kullanılması hem de inheritance ın çeşitli özeliiklleri için kullanılır.
//referans tip olduklarından birbirinin referans numarasını tutabiliyorlar.
//bir kişiyi hem personele hem de kişi clasına atabiliriz.
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Object.defineProperty(Kisi.prototype, "isim", {
        get: function () {
            return "Sayın " + this._isim;
        },
        set: function (ad) {
            this._isim = ad;
        },
        enumerable: false,
        configurable: true
    });
    Kisi.prototype.kaydet = function () {
        console.log("Kişi kaydedildi...");
    };
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satısYap = function () {
        //isimi burada tanımayacak. private ile
        //  this.isim//isime protected ile erişiliyor.
        console.log("Satış Yapıldı...");
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("Maaş Ödendi...");
    };
    return Personel;
}(Kisi));
var musteri = new Musteri();
//musteri.isim//public ile isimi tanır.
musteri.isim = "Ebru";
console.log(musteri.isim); //okuma yani geti çalıştırır.
musteri.kaydet();
musteri.satısYap();
var personel = new Personel();
personel.kaydet();
personel.maasOde();
//private protected public erişim bildirgeçleri private:tanımlandığı class içerisinde geçerli. eğer private yazılı değilse public anlar.
//protected neden kullanılır:soyutlama tekniklerinde kullanılır. örneğin bir konfigürasyon metnin var. conection string.conection string genelde veritabanına bağlanmak için hangi veritabanına hangi ipde hangi Otantikasyon (Authentication) yöntemiyle gibi bir bilgidir. Bu bilgiyi siz temel class içinde tanımlıyorsunuz. Artık müşteriden de veri tabanına giderken kullanabiliyorsun personelden de veritabanına giderken aynı metni kullanabiliyorsun. Veri tabanı değiştiğinde temel sınıfın içine gelip değiştirdiğin zaman her yerde değişmiş olur.
//Otantikasyon kimlik doğrulama anlamında kullanılmaktadır.
//propertyler:özellikler/mülk sahibi:csharpta
//getter-setter metotları :ncaplucation/kapsülleme tekniği. Kapsülleme tekniği:
