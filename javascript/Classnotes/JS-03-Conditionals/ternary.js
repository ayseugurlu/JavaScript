//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik

// condition ?  (şart olduğunda yapılacaklar)  : (şart doğru olmadığında yapılacaklar)

//örnek1

const age = 12;
const gender = "erkek";
const health = true;

const message =
  age >= 20 && gender == "erkek" && health == true
    ? "askerlik yapabilir"
    : "askerlik yapamaz";

console.log(message);

//---------------

age >= 20 && gender == "erkek" && health == true
  ? console.log("ok")
  : console.log("no");

//örnek2

// kullanıcıdan not isteyelim 50 ve üstüyse başarılı, altıysa başarısız olsun

const grade = +prompt("lütfen notunuzu giriniz");

grade >= 50 ? console.log("succeed") : console.log("failed");

// //? tek durumlu kosullandirmada da mecburen else yapisi (: ve sonrasi) kullanilmak zorundadir.

grade >= 50 ? console.log("succeed") : "";

grade >= 50 && console.log("succeed");

// //? Nested ternary yazmak aslinda anlasilabilirligi azaltiyor. Bu sebeple, sadece 2 durum var ise
// //? Ternary kullanmak daha mantiklidir. Daha coklu sorgularda if else dha mantiklidir.

const speed = 150;
    speed > 120
  ? console.log("speedy")
  : speed >= 90
  ? console.log("normal")
  : console.log("slowly");

  // //? ayni örneğin if-else ile yapilmasi
// if (speed > 120) {
//   console.log("Speedy")
// } else if (speed >= 90) {
//   console.log("Normal")
// } else {
//   console.log("Low Speed")
// }
