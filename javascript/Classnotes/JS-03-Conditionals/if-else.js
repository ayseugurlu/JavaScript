/* ------------------------ */
/*       CONDITIONALKS      */
/* ------------------------ */

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

//!propmt a girilen değerler string olarak algılanır. sayı olsun istiyorsak önüne ya Number yazmalıyız ya da + koymalıyız
// const sayi1 = +prompt("1.sayi giriniz");
// const islem = prompt("+, -, *, / islemlerinden birini giriniz");
// const sayi2 = +prompt("2.sayiyi giriniz");
// let sonuc;
// if (islem == "+") {
//   sonuc = sayi1 + sayi2;
// } else if (islem == "-") {
//   sonuc = sayi1 - sayi2;
// } else if (islem == "*") {
//   sonuc = sayi1 * sayi2;
// } else if (islem == "/") {

//     if(sayi2!=0){sonuc=sayi1/sayi2;}
//     else{alert("payda 0 olamaz");}

// } else {
//   alert("yanlis islem girdiniz");
// }
// console.log(sonuc);

// //******* */
// if(sonuc!=0){ //sonuc 0 disinda herhangi bir degerken
//     console.log("tebrikler bir deger elde ettiniz");
// }

// //? kisa yol
// if(sonuc){
//     console.log("tebrikler bir deger elde ettiniz");
// }

// //? kisa 2.yol (short circuit)

// sonuc && console.log("komik olma kuzen Larry");


//***ORNEK */

const age=12;
const gender="erkek";
const health=true;

if (age>=20 && gender=="erkek" && health==true){
    console.log("askerlik yapabilir");
}else {
    console.log("askerlik yapamaz");
}