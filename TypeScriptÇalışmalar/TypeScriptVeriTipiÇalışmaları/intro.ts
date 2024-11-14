function selamVer(isim:string){
    return "Merhaba "+isim
}

let mesaj=selamVer('Ebru 2')

console.log(mesaj)

let sayi:number=12
sayi=10
sayi=10.4

let sehir:string="Adana"
sehir="Ankara"
sehir="İstanbul"

let dogruMu:boolean=true//mantıksal ifadelerde kullanılır(true-false)
dogruMu=false
dogruMu=true

let sayilar:number[]=[1,2,3]
let sayilar2=[1,2,3,"Adana"]

let sayilar3:Array<number>=[1,2,3,4]

let dizi:[number,string]=[2,"Ankara"] //toople : ben aynı anda bir dizinin içine şöyle bir tanım yapıcam.
dizi[0]
dizi[1]

//enum:örn veritabanınnda sizin 5 tane şehirde ofisin var. veritabanında tutulması gerek.programlarken magic string denen bir olay var. enam lar magic stringlerden kurtulmak için kullanılır.çok fazla ankara şehrinin gazi ankara olarak değiştirmeye kalkışırsak çok fazla kod işlemiyle uğraşmak zorunda kalırız. bizi bu yükten kurttarıyor.
//enum Renkler //class mantğındadır. pascal case dediğimiz büyük harf ile başlar.
enum Renk{Kirmizi=1,Siyah,Mavi}
let renk:Renk=Renk.Kirmizi

//any=herhangi. bize gelecek olan datanın veritipinden emin olmadığımız vakitler kullanırız.
let deger:any="Ankara"
deger=2
deger={}

//void aslnda birnevi özellikle bir şey döndürmek istemiyoruz fonksiyonumuzda.
let deger2:void=undefined

function selamVer2():void{
    console.log("Merhaba")
}

//undefined-null birbiriyle karışır genelde.Null referans tiplerde kullanılır.

let yas:number //undefined(değer atmadın yani.
yas=10 //şu an undefined değil

class Musteri{//bi referans oluşturmadığından null değer dir. new lenmemiş

}







