//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir. Ve siz ekstra bir sey istemedikce diziyi degistirmez.

//*======================================================

//* örnek1

const prices1 = [100, 250, 50, 90];

prices1.forEach((osman) => console.log(osman));
console.log(prices1); //orijinal diziyi bozmadi

let toplam = 0;
const terminal = prices1.forEach((a) => console.log((toplam += a)));

console.log(terminal); //undefined

//*********************************ORNEK******* */

//* p => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir. farklı isim kullanılabilir

//? Her bir nelemani 2 katiyla carp ve bütün dizi elemanlarila carp

const prices2 = [100, 250, 50, 90];
let toplam1 = 0;

prices2.forEach((p, i, prices) => {
  toplam1 += p;
  console.log(`${i + 1}. toplam ${toplam1}`);
  prices[i] = p * 2;
  //*su sekilde diziyi kalici olöarak degistirdik
});

console.log(prices2);

//*örnek meyveler dizisindeki elemanların harf sayısı 3 ten büyük olan meyveleri büyük harfe çevir
const meyveler = ["elma", "erik", "muz", "karpuz"];

meyveler.forEach((meyve) => {
  if (meyve.length > 3) {
    console.log(meyve.toUpperCase());
  } else {
    console.log(meyve);
  }
});

//* ======================================================
//*                       MAP METHOD
//!map yapılan değişikliği bir diziye atıp, bunu döndürebilir,  foreach gibi tüketmez.
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisinin içindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const names = [
  "ayca",
  "kemal",
  "mustafa",
  "ayse",
  "fatih",
  "halil",
  "umut",
  "gökçe",
  "mehmet",
];

const yeni = names.map((a) => a.toUpperCase());

console.log(yeni);
console.log(names);

names.map((a) => a.toUpperCase()).forEach((a) => console.log(a));

//!her elemanin sadece ilk harfini büyüttük
const yeni2 = names.map((a) => a.slice(0, 1).toUpperCase() + a.slice(1));

console.log(yeni2);

//?örnek
//* fiyatlar dizisindeki ürün fiyatlarinın 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 150 TL gibi
//* p => prices dizisinin her bir elemanı
//* i => indis
//* array=> fiyatlar dizisidir.

const fiyatlar = [100, 300, 50, 90];

fiyatlar.map((p, i, array) => {
  if (p < 250) {
    array[i] = p * 1.5;
  } else {
    array[i] = p * 1.2;
  }
});

console.log(fiyatlar);

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizilere kaydediniz
// toFixed(sayı) komutu virgüllü sayılarda kullanılır, aldığı sayı parametrei kadar virgülden sonra eleman bırakır

//! toFixed()= kullandığınız sayıları string e çevirir, tekrar number yapmak istersek, önlerine Number yazarız (ya da + koyarız)

const tlPrices = [100, 150, 200, 80, 50];
const dolar = 27.5;
const euro = 29.5;

const dolarPrices = tlPrices.map((para) => +(para / dolar).toFixed(2));
console.log(dolarPrices);

const euroPrices = tlPrices.map((para) => Number((para / euro).toFixed(2)));

console.log(euroPrices);

//* ======================================================
//*                       FILTER METHOD
//* ======================================================
//* prices array"inde fiyatı 200 TL den az olanlari ayri
//* bir diziye saklayalim.

const prices = [200, 500, 100, 180];

const ucuzlar = prices.filter((a) => a < 200);

console.log(ucuzlar);

prices.filter((a) => a < 200).forEach((a) => console.log(a));

console.log(prices);

prices
  .filter((a) => a < 200)
  .map((c) => c * 2)
  .forEach((a) => console.log(a));

//?????? ornek1
const text = "Clarusway Online Career IT TraininG School ThankS for time";

// ! yukarıdaki string i array e çevirip bütün kelimelerin harflerini büyüt

text
  .split(" ")
  .map((a) => a.toUpperCase())
  .forEach((a) => console.log(a));

//!yukarıda array e döndürdüğümüz string cümledeki, sadece T ile başlayan kelimelerin ilk harfini küçült, diğer harflerini normal bırakarak yazdır

text
  .split(" ")
  .filter((a) => a.startsWith("T"))
  .map((a) => a.slice(0, 1).toLowerCase() + a.slice(1))
  .forEach((a) => console.log(a));

//? ornek2. n harfiyle biten isimleri tersten yazdırıp yeni bir diziye atın

const names2 = [
  "ayca",
  "kemal",
  "mustafa",
  "ayse",
  "fatih",
  "halil",
  "erkan",
  "umut",
  "gökçe",
  "mehmet",
  "rengin",
];

const newName = names2
  .filter((a) => a.endsWith("n"))
  .map((a) => a.split("").reverse().join(""));

console.log(newName);

//* ======================================================
//*                       PIPELINE (yukarida da pipeline a örnek yaptik)
//* ======================================================

//!slide daki soru, pipeline olmazsa böyle uzun uzun if le çözeriz
//* Fiyatı 100 TL den fazla olanlara %10 zam, 100 tl ve 100 TL den az olanlara ise %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.

const fiyatlar2 = [100, 250, 50, 90];

//! 1.yol map + if ile

const yeniDizi=fiyatlar2.map((a) => {
  if (a > 100) {
   return  a * 1.1;
  } else {
  return  a * 1.15;
  }
});

console.log(yeniDizi)

//! 2.yol

const zengin=fiyatlar2.filter((a)=> a>100).map((a)=> a*1.1)
const fakir=fiyatlar2.filter((a)=>a<=100).map((a)=> a*1.15)

console.log(zengin.concat(fakir))



//* ======================================================
//*                      REDUCE tek bir eleman döndürür
//*               reduce(accumulator, currentValue);
//* ======================================================

//* salaries dizisindeki maaşları toplayınız (reduce metodu kullanın)

//  console.log( salaries.reduce((toplam,eleman)=>toplam + eleman,0))
// alttaki kodu yukarıdaki gibi görür ve toplam değişkenine 0 ı assign eder, 0 yazmamıza gerek yok

const salaries = [3000, 5000, 4000, 6000, 7500];

console.log(salaries.reduce((toplam,eleman)=>toplam+eleman))

//! forEach metodu dizilerde kullanılabilir, reduce tek bir eleman döndürdüğü için, burada forEach kullanamayız.

console.log(salaries.reduce((acc,current)=> acc*current))



//*örnek
//allta 1 den 7 ye kadar olan sayilarin bulundugu bir dizi verilmis ancak bir eleman unutulmnus, unutulan elemani bulunuz.

const nummern=[5,1,4,7,2,3]

let total=((nummern.length+1)*(nummern.length+2))/2

const diziToplam=nummern.reduce((acc,curr)=> acc+curr)

console.log(`unutulan sayi ${total-diziToplam}`)