//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================
//*ÖRNEK: dizi1 arrayindeki pozitif sayılarla negatif sayıları 2 ayrı array de toplayan function yazınız

const dizi1=[-5,-10,-20,8,2,27,-9,7,15]

const negatifler1=[]

const pozitifler1=[]

const dizileriAyir1=()=> {
    for(let i=0 ; i<dizi1.length; i++){
        if(dizi1[i]<0){
            negatifler1.push(dizi1[i])
        }else{
            pozitifler1.push(dizi1[i])
        }
    }

    console.log(pozitifler1)
    console.log(negatifler1)
}

dizileriAyir1()

//************FOr IN */


const dizi2=[-5,-10,-20,8,2,27,-9,7,15]
const negatifler2=[]
const pozitifler2=[]


//! 1. Yol for in döngüsü kullanarak cözdük
const dizileriAyir2=() => {
    for(let i in dizi2){
        if(dizi2[i]<0){
            negatifler2.push(dizi2[i])
        }else{
            pozitifler2.push(dizi2[i])
        }

    }
    console.log(pozitifler2)
    console.log(negatifler2)

}

// dizileriAyir2()

//********FOR OF */

//! 2.yol For of döngüsü kullanarak cözdük

const dizileriAyir3=()=> {
    for(let item of dizi2){
        // console.log(item)
        if(item<0){
            negatifler2.push(item)
    
        }else{
            pozitifler2.push(item)
        }
    }

    console.log(pozitifler2)
    console.log(negatifler2);
}

dizileriAyir3()


//* ======================================================
//*                   FOR IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//* bir dizide saklandığını varsayalım.Bu hayvanları türüne
//* göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//*  ana programa döndürecek fonksiyonu yazınız.
//*--------------------------------------------------------

const animal = [
    "fil",
    "aslan",
    "deve",
    "fil",
    "kaplan",
    "fil",
    "deve",
    "aslan",
    "aslan",
    "aslan",
  ];

  const userAnimal="deve"

  const findAnimal=() => {
    let sayac=0

    for(let i in animal){
        if(animal[i]==userAnimal){
            sayac++
        }
    }
    return `${userAnimal} hayvanindan ${sayac} adet bulunmaktadir.`
    
  }

 console.log(findAnimal())


 //* ======================================================
//*                   FOR OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.

//* ORNEK: alttaki dizinin elemanlarını yanyana string olarak yazdır (for of döngüsü kullanın)

const arabalar = ["bmw", "mercedes", "audi", "volvo"];

//!1.yol
console.log(arabalar.join(""));

//!2.yol(for of)

let araba=""
for(let i of arabalar){
    araba+=i;


}

console.log(araba)


//! for loop=> Bir dizi üzerinde iteration yapmanın orjinal yollarından biridir.	
//? forEach=> Bir dizi üzerinde iteration yapmak için daha az kod içeren daha yeni bir yoldur.
//! for loop=>Performansta daha hızlıdır.	
//? forEach=> Performansta geleneksel döngüden daha yavaştır.
//! for loop=> Break ifadesi döngüden çıkmak için kullanılabilir.	
//? forEach=> Break ifadesi, geri arama işlevi nedeniyle kullanılamaz.




