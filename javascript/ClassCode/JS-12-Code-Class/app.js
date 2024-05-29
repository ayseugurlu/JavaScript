// Dizi metodları
// pop(): dizinin son elemanını siler
// shift(): dizinin başındaki elamanı siler 
// push(): diziniz sonuna eleman ekler
// unshift() : dizinin başına eleman ekler 
// reverse() : diziyi tersine çevirir 
// splice():(başlangıç indexi, kaç eleman alınacak(silinecek), eklenecek eleman (item1, item2...))
// sort(): sıralama yapar(stringlerde ifadelerde ascii kodlara göre alfabetik sıralama ) 
// sort((a,b)=> a-b )
// includes(deger): içeriyomu (trıe - false)
// indexOf(deger): değerin kaçıncı indexte olduğunu 
// join(" "): bir dizideki elemanları birleştirerek stringe çevirir 
// slice(): diziden bir parçayı almamaızı sağlar 
// concat(): iki diziyi birleştirir
// every: dizi içiindeki her elemean için bir callback fonksiyon çalıştırır.ve call fonksiyondaki şartı sağlıyosa true değer çevirir


// const numbers = [45,16,34,23]
// numbers.every((num)=>num > 18) //false

// some: dizi içiindeki her elemean için bir callback fonksiyon çalıştırır. ve  fonksiyondaki en az bir şartı sağlıyosa true değer çevirir

// const numbers = [45,16,34,23]
// numbers.some((num)=>num > 18) //true

/*-----------------------------------------*/

// map: bir dizi için bir callback fonksiton çalıştırır. vd her eleman için o fonksiyondan çıkan sonucu bir diziye aktarır.
// forEach: bir dizi için bir callback fonksiton çalıştırır. Geriye bir değer döndürmez
// filter: bir dizi için bir callback fonksiton çalıştırır. Verilen koşulu sağlayan bir değer döndürür
// reduce: dizidekii elemanları toplayarak tek bir değere döndürür

/*-----------------------------------------*/


//! 1. Bir dizideki elemanlarin ortalamasini bulan fonksiyon

const numbers=[34,56,56,87,90]

const ortalama=numbers.reduce((a,b)=> a+b)/numbers.length

console.log(ortalama)


// 2.Yol

let toplam = 0

const ortalama1 = () => {
    for (let i = 0; i < numbers.length; i++) 
        toplam += numbers[i]
    return toplam
}
console.log(ortalama1()/ numbers.length);

//2- Girilen bir cümledeki kelime sayısını bulan fonksiyon
const sentence="Merhaba Cohort DE-09"

const kelimeSayisi=(a)=> a.split(" ").length   // eger ne kadar bosluk old emin degilsek split(/\s+/) yazariz bursa \s bosluk + dahada fazlasi demek

console.log(kelimeSayisi(sentence))


//!Size bir  cümle verildi. "Clarusway" kelimesini bulmanız ve şuna benzer bir cümle döndürmeniz gerekir:
//? Clarusway'i bulamıyorsanız, "I can't find Clarusway :(" yazın.
//? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"

const findWord=(a)=>{

    const arr=a.split(" ")
    if(arr.includes("Clarusway")){

    return ` I found Clarusway at ${arr.indexOf("Clarusway")+1}!`
    }else{
        return `I can't find Clarusway :(`
    }
}

const cümle="I like Clarusway"
const cümle1="I like bootcamps"

console.log(findWord(cümle))
console.log(findWord(cümle1))


//! Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program
// removeDuplicated([1,0,1,0,1]) // Output [1,0]
// removeDuplicated(["the","small","cat","the","cat"]) // ouput["the","small","cat"]

const removeDuplicate=(a)=>{
    const newArray=[]
    for(const i in a)
    if(!newArray.includes(a[i])){
        newArray.push(a[i])
    }

    return newArray
}

console.log(removeDuplicate([1,0,1,0,1]))
console.log(removeDuplicate(["the","small","cat","the","cat"]))

//!Bir dizide ilk harfi A ile başlayan elemanları yeni bir diziye alan fonksiyon 
const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];

const moveWithA=(a)=>{
    arrayA=[]
    for(const i in a){
        if(a[i][0]=="A"){
            arrayA.push(a[i])

        }
    }
    return arrayA
}

console.log(moveWithA(words))

//! 2.yol

function removeDuplicated(arr) {
    const duplicatedArray = []
    for (let i of arr) {
        if (!duplicatedArray.includes(i)) {
            duplicatedArray.push(i)
        }
    }
    return duplicatedArray
}

console.log(removeDuplicated([1,0,1,0,1]))
console.log(removeDuplicated(["the","small","cat","the","cat"]))

//! bir dizide verilen  maaşlara %10 zam yapılacak ama hala 20000 altında kalanlara ek ödeme planlanacak
// a- Kaç kişi zam olsa bile 20000 altında kalıyor
let salaries=[18000,13000,17000,24000,18500,21000,19300]

const düsük=salaries.filter((a)=>(a*1.1)<20000)
console.log(düsük.length)

// b- Maaşı zamlı halde 20000in altında kalanlara patronumuz belki bir güzellik yapar. 20000 altında kalanları 20000'e tamamlayabilir ama ne kadar bütçe ayırmalı.

salaries.filter

console.log(düsük)
const zamli=düsük.map((a)=>a*1.1).map((a)=> 20000-a).reduce((a,b)=>a+b)

console.log(zamli)

// EXTRA QUESTIONS

//!1-Bu şekilde girilen stringi "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
//! 612453789   bu hale dönüştüren program

const returnNumber=(a)=>{
    b=a.split(",")
    console.log(b)
    const number=[]
    b.map((x)=> {if(x=="bir")number.push(1);
                else if(x=="iki")number.push(2);
                else if(x=="üc")number.push(3);
                else if(x=="dört")number.push(4);
                else if(x=="bes")number.push(5);
                else if(x=="alti")number.push(6);
                else if(x=="yedi")number.push(7);
                else if(x=="sekiz")number.push(8);
                else if(x=="dokuz")number.push(9);
                else{number.push("?")}
}

)

return number.join("")

}

console.log(returnNumber("alti,bir,iki,dört,bes,üc,yedi,sekiz,dokuz"))










//!2-Bir dizi içindeki sayıları asal olanlarını filtreleyen bir  fonksiyonu oluşturun.(filter ile yapılması önerilen)

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(x){
    if(x<=1){return false;}

    for(let i=2 ; i<x ; i++ ){
        if(x%i==0){
            return false
        }
    }
    return true
}

console.log(isPrime(22))

const asallar=numbers1.filter((a)=>isPrime(a))

console.log(asallar)

//!3-Bir diziyi tersine çeviren bir map fonksiyonu oluşturun. 
const originalArray = [1, 2, 3, 4, 5];

originalArray.map((a)=>  newArr=originalArray.reverse() )

console.log(newArr)

//!4 -verilen sayıyı yazıya çeviren program

const returnWord=(x)=>{
    y=x.split("")
    console.log(y)
    const word=[]
    y.map((x)=> {if(x==1)word.push("bir");
                else if(x==2)word.push("iki");
                else if(x==3)word.push("üc");
                else if(x==4)word.push("dört");
                else if(x==5)word.push("bes");
                else if(x==6)word.push("alti");
                else if(x==7)word.push("yedi");
                else if(x==8)word.push("sekiz");
                else if(x==9)word.push("dokuz");
                else{word.push("?")}
}

)

return word

}

const sayi="436732986"

console.log(returnWord(sayi))









