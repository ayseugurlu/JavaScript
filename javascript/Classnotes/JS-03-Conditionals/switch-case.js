//! ---------------------------------------------
//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------

// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar
//! bu bloktan çıkması için break kelimesi ile switch alanından çıkmasını sağlarız

// switch ( değişken){

//     case durum1:
//         değişken durum1 e eşit oluğunda yapılacaklar  break
//     case durum2:
//         değişken durum2 e eşit oluğunda yapılacaklar break
//         .
//         .
//         .
//     case durumN:
//         değişken durumN e eşit oluğunda yapılacaklar  break
//     default:
//         yukarıdaki durumların hiçbiri gerçekleşmediğinde yapılacaklar
// }

// console.log("-------------------------------------");
// console.log(" ==SWİTCH-CASE== 4 Islem Hesap Makinesi ");
// console.log("-------------------------------------");

// const sayi1 = +prompt("1. sayıyı giriniz");
// const islem = prompt("+,-,*,/ işlemlerinden birini giriniz");
// const sayi2 = +prompt("2. sayıyı giriniz");

// let sonuc;

// switch (islem) {
//   case "+":
//     sonuc = sayi1 + sayi2;

//     break;
//   case "-":
//     sonuc = sayi1 - sayi2;
//     break;
//   case "*":
//     sonuc = sayi1 * sayi2;

//     break;
//   case "/":
//     if (sayi2 != 0) {
//       sonuc = sayi1 / sayi2;
//     } else {
//       alert("payda 0 olamaz");
//     }
//     break;

//   default:
//     alert("yanlis islem girdiniz");
//     break;
// }

// console.log(`${sayi1} ${islem} ${sayi2} = ${sonuc}`);


/* ------------------------ */
/*      KARISIK SORULAR     */
/* ------------------------ */

// //? ornek1: maasınız asgari ücretten düşük ve eşitse maaşınıza %25 zam yapılsın, değilse maaşınıza %10 zam yapılsın. Ternary ile cözünüz.

// const asgariUcret=17000;
// const maas=+prompt("maasinizi giriniz");

// const zamliMaas= maas<=asgariUcret ? maas*1.25 : maas*1.1 ;

// console.log(zamliMaas);

//?Ornek2:10 aylık maasınız borcunuzdan 5000 ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsınız

const Schuld= 30000;
const Gehalt= 3600;

console.log(Gehalt*10-Schuld >= 5000 ? "Kredi alabilir." : "Kredi alamaz");

//? ORNEK3: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.

const n1=3;
const n2=5;
const n3=12;

//? kosullarin logical operatorler yardimiyla birleştirilmesi

if(n1>n2 && n1>n3){
    console.log("The biggest", n1);

}else if(n2>n1 && n2>n3){
    console.log("The biggest", n2);

}else console.log("The biggest", n3);

//2.yöntem

const s1=377;
const s2=56;
const s3=12;

let biggest=s1;

if(s2 > biggest){
    biggest=s2;
}
if(s3>biggest){
    biggest=s3;
}

console.log(biggest);




