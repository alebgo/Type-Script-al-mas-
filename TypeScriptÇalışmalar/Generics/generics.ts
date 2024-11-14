//generics: jenerikler
//veritabani:api 
//genericslerle tekrar taekrar zahmetinden kurtulmak hem  de tip güvenli dediğimiz modelle çalışmayı sağlıyoruz.

function deger(x: number): number {
    return x
}

function deger2(x: string): string {
    return x
}

let sayi = deger(10)
console.log(sayi)

let sehir = deger2("Ankara")
console.log(sehir)

function deger3<T>(x: T): T {  //fonksiyon fonksiyonismi(parametre:tipi):çıkıştipi(return){return parametre}
    return x
}

let sayi3 = deger3<number>(2)
let sehir3 = deger3<string>("Ankara")

//tsc typescript compiler

//genericsleri class içindede tanımlayabiiriz

class GenericClass<T> {
    değisken:T
    fonksiyon(parametre: T): T {
        return parametre
    }
}

let sinif=new GenericClass<string>()

sinif.fonksiyon("Ankara")