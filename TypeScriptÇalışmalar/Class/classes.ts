//class nesne diye de adlandırabileceğimiz yapı. içerisinde n-caplucation dan tutun farklı tekniklere kadar bir çok özelliği beraberinde getirir.
//classlar yani nesneler hem özellikleri hem de içerisinde operasyonları yani yapılacak işleri barındıran yapılar.
//sürdürülebilir yazılım:gündelik hayatta nasıl değişim varsa yazılım yani programımızzda da devamlı bi değişim olacaktır. sürdürülebilir yazılımlar için miras inheritance ve implemantation gibi avantajları getirir classlar.
//classlar pascal case büyük harfle başlar.
class Ev{
    public _odaSayisi:number//bu değerlere ulaşmak için this keywordüne ihtiyaç vardır.
     _pencereSayisi:number
    _kat:number
    //constructer:yapıcı blok.classlar bir referans tiptir. arrayler gibi.bir classtan bunu(Ev clasını) kullanablmeniz için ondan bir instance(örnek) üretmeniz gerek.newlwmw işlemi gerek.
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi=odaSayisi
        this._pencereSayisi=pencereSayisi
        this._kat=kat
    }

    yemekYe(){
        console.log(this._kat+" katlı evde yemek yiyildi...")
    }

}

let ev= new Ev(3,4,5)
ev.yemekYe()

//ctrl+c ile çalışan kod durdurulur.

console.log(ev._kat)


//field=alan

//inheritance:miras //nesnelerin ortak özelliklerinin birbirirnin yerine tekrarlamadan kullanılması hem de inheritance ın çeşitli özeliiklleri için kullanılır.
//referans tip olduklarından birbirinin referans numarasını tutabiliyorlar.

//bir kişiyi hem personele hem de kişi clasına atabiliriz.

class Kisi{
    //private isim:string//sadece tanımlandığı class içinde geçerli.
   // protected isim:string//privatedeki her şey geçerli. Yani tanımlandığı class içinde isime ulaşılır.İnheritance verdiği class için de geçerli. this ile gelir.
   //public:herkes erişebilir demek.
   //public isim:string
   private _isim:string//isim ebru  biz sayın ebru yazdırmak istiyoruz.bu durumda getter ve setter  kullanıcaz 
   get isim():string{  //get:al/oku anlamında
   return "Sayın "+this._isim
}
    set isim(ad:string){//set:kurmak/değeri atamak.
        this._isim=ad
    }
    kaydet(){
        console.log("Kişi kaydedildi...")
    }
}

class Musteri extends Kisi{//extends ile Müşteri içinde kaydet de gelecek.
    satısYap(){
        //isimi burada tanımayacak. private ile
      //  this.isim//isime protected ile erişiliyor.
        console.log("Satış Yapıldı...")
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log("Maaş Ödendi...")
    }
}

let musteri=new Musteri()
//musteri.isim//public ile isimi tanır.
musteri.isim="Ebru"
console.log(musteri.isim)//okuma yani geti çalıştırır.
musteri.kaydet()
musteri.satısYap()

let personel=new Personel()
personel.kaydet()
personel.maasOde()

//private protected public erişim bildirgeçleri private:tanımlandığı class içerisinde geçerli. eğer private yazılı değilse public anlar.
//protected neden kullanılır:soyutlama tekniklerinde kullanılır. örneğin bir konfigürasyon metnin var. conection string.conection string genelde veritabanına bağlanmak için hangi veritabanına hangi ipde hangi Otantikasyon (Authentication) yöntemiyle gibi bir bilgidir. Bu bilgiyi siz temel class içinde tanımlıyorsunuz. Artık müşteriden de veri tabanına giderken kullanabiliyorsun personelden de veritabanına giderken aynı metni kullanabiliyorsun. Veri tabanı değiştiğinde temel sınıfın içine gelip değiştirdiğin zaman her yerde değişmiş olur.
//Otantikasyon kimlik doğrulama anlamında kullanılmaktadır.

//propertyler:özellikler/mülk sahibi:csharpta
//getter-setter metotları :ncaplucation/kapsülleme tekniği. Kapsülleme tekniği:


