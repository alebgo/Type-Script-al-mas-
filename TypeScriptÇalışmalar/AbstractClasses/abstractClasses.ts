//Kendileride bir classtır ama tek başlarına anlam ifade etmezler.Tek başına kullanılmazlar.ancak inheritance(miras) verme yöntemi ile kullanılabilirler.
//ortak ve ortak olmayan operasyonları belirlemek için kullanılır.
abstract class KrediBase{
    constructor(){

    }
    kaydet():void{ //her yerde ortak//tamamlanmış operasyon
        console.log("Kaydedildi")
    }
    abstract hesapla():void //her yerde ortak değil o yüzden imza şeklinde bıraktık.
}

class TuketiciKredi extends KrediBase{
    
    constructor(){
        super()//abstract class da yazmamız gerek. Consr-tructeri KrediBas clasında parametresiz gönderdiğimiz için.
        //eğer constructer içinde bişey:string gibi bir ifade olsaysı,super("kmklm") tarzı bir şeyler olmalıydı.    }
}
hesapla(): void //her yerde ortak değil o yüzden imza şeklinde bıraktık.
    {
        console.log("Tüketici kredisine göre hesap yapıldı...")
    }

}


class MorgageKredi extends KrediBase{
    
    constructor(){
        super()//abstract class da yazmamız gerek. Consr-tructeri KrediBas clasında parametresiz gönderdiğimiz için.
        //eğer constructer içinde bişey:string gibi bir ifade olsaysı,super("kmklm") tarzı bir şeyler olmalıydı.    }
}
hesapla(): void //her yerde ortak değil o yüzden imza şeklinde bıraktık.
    {
        console.log("Konut kredisine göre hesap yapıldı...")
    }
    baskaBirOperasyon(){// MorgageKredi clasına özel.

    }

}

let tuketiciKredisi=new TuketiciKredi()
tuketiciKredisi.hesapla()
tuketiciKredisi.kaydet()


let morgageKredi=new MorgageKredi()
morgageKredi.hesapla()
morgageKredi.kaydet()


let kredi:KrediBase
kredi=new TuketiciKredi()
kredi=new MorgageKredi()


//abstract sınıflar hem tamamlanmış hem tamamlanmamış operasyonlar içerir.