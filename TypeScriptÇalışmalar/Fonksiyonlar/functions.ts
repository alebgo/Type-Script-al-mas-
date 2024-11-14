function topla(x,y){
    return x+y
}

function topla2(x:number,y:number):number{
    return x+y
}

let topla3=function(x:number,y:number):number{
    return x+y
}

console.log(topla(2,3))
console.log(topla("Ankara",2))
console.log(topla2(2,4))
console.log(topla3(4,8))


console.log(topla(2,8))

function topla4(x:number,y:number=4):number{//default değer olarak kullanamak için
    return x+y
}

console.log(topla4(3))

function topla5(x:number,y?:number):number{//y yi vermesen de olurdefault değer olarak kullanamak için. y undefined durumunda.
 //opsiyonun ya da defaultun sonda olması gerek. x default olamaz.
    if(y){
    return x+y
    }
    return x
}

console.log(topla5(3))//y değeri verildiğinde direkt toplar.if y çalışır.


function topla6(x:number,y?:number):number{//y yi vermesen de olurdefault değer olarak kullanamak için. y undefined durumunda.
    //opsiyonun ya da defaultun sonda olması gerek. x default olamaz.
       if(y){
       return x+y
       }
       return x
   }
   
   console.log(topla6(3,40))//y değeri verildiğinde direkt toplar.if y çalışır.


   //rest parametreler: aynı tipte alacağınız parametre/eleman sayısı belli değilse rest parametrelerden yararlanılır

   function davetEt(ilkDavetli:string,...digerleri:string[]):string{//bu aslında string dizisidir.
        return ilkDavetli+" "+digerleri.join(" ")
   }
   console.log(davetEt("Engin","Derin","Salih","Ahmet"))


function davetEt2(...digerleri:string[]):string{//bu aslında string dizisidir.
    return digerleri.join(" ")
}
console.log(davetEt2("Engin","Derin","Salih","Ahmet"))

