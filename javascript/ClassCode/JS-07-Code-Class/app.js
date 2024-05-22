//! 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit

const toFah = function (C) {
  return C * (9 / 5) + 32;
};

console.log(toFah(50));

//! 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?

function adTers(a) {
  let n = "";

  for (i = a.length - 1; i >= 0; i--) {
    n = n + a[i];
  }
  return n;
}

console.log(adTers("piraye"));

//! 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?

function palindromeCheck(a) {
  let n = "";

  for (i = a.length - 1; i >= 0; i--) {
    n = n + a[i];
  }

  console.log(n);

  if (a == n) {
    console.log("Bu bir palindrom ifadedir");
  } else {
    console.log("Bu bir palindrom degildir");
  }
}

palindromeCheck("ayse");
palindromeCheck("ey edip adanada pide ye");

//! 4- Bir sayıyı tersine çevirecek bir fonksiyon yazın?

function reverseNumber(b) {
  let a = b.toString();

  let n = "";

  for (i = a.length - 1; i >= 0; i--) {
    n = n + a[i];
  }
  n = parseInt(n);
  return n;
}

console.log(reverseNumber(123));
console.log(typeof reverseNumber(123));

//* II.Yol

const ters2 = (num) => {
  let reverse = 0;

  while (num != 0) {
    reverse = reverse * 10;
    reverse += num % 10;
    num = Math.trunc(num / 10);
  }

  return reverse;
};

console.log(ters2(1485));

//! 4- Belirli bir sayının pozitif tam bölenlerinin toplamını ve sayisini bulan fonksiyonu yazınız?

let sumOfCommonDivisor = function (a) {
  let sum = 0;
  let counter = 0;
  for (i = 1; i <= a; i++) {
    if (a % i == 0) {
      sum += i;
      counter++;
    }
  }
  console.log(counter);
  return sum;
};

console.log(sumOfCommonDivisor(10));
console.log(sumOfCommonDivisor(6))

//! 5- İlk 2 parametreyi çarpıp 3. parametreyi üs olarak alan fonksiyonu yazınız?

const islem = function (a, b, c) {
  return (a * b) ** c;
};

console.log(islem(1, 2, 3));

//! 6- 100den 1000 e kadar olan sayılardan polindrom olanlarını belirten/yazan program.
// for (b = 100; b <= 1000; b++) {
//   reverseNum(b);
//   function reverseNum(b) {
//     let a = b.toString();

//     let n = "";

//     for (j = a.length - 1; j >= 0; j--) {
//       n = n + a[j];
//     }
//     n = parseInt(n);

//     if (b == n) {
//       console.log(n);
//     }
//   }
// }


//! 7-Yarıçapı verilen bir dairenin alan ve çevresini bulan program?

const AlanCevre=function(r){
    const Pi=Math.PI
    console.log(`Alan= ${Pi*r*r}`)
    console.log(`Cevre= ${2*Pi*r}`)
}

AlanCevre(3);


//? tellFortune adlı bir fonksiyon yazın:
  //? 4 farklı parametre : jobTitle, geoLocation, partner, numKids.
  //? falınızı ekrana şu şekilde verir: "Gelecekteki mesleğiniz *****'dir. ****'da yaşayacaksınız. **** ile evlenecek ve *** çocuk sahibi olacaksınız"

const tellFortune=function(jobTitle, geoLocation, partner, numKids){
    console.log(`Gelecekteki mesleğiniz ${jobTitle}'dir. ${geoLocation}'da yaşayacaksınız. ${partner} ile evlenecek ve ${numKids} çocuk sahibi olacaksınız`)
}

tellFortune("webdeveloper", "Almanya", "Mahmut", 1);

//!9- write a function to calculate compound interest based on the principle amount 
//  \\ Function `compoundInt()` returns a final amount based on the compound interest formula provided principal amount, rate of interest per year, time on a yearly basis, and n as the number of times that interest is compounded per unit time.

const compoundInt=function(anapara, faiz, zaman, n){
    let result= anapara*Math.pow(1+ faiz/n, n*zaman );

    return result;

}

console.log(compoundInt(1000,0.2,1,4))

//! 10- Mükemmel sayıyı bulan fonksiyonu yazınız.
  
  //? Bölen sayıları toplamı orjinal sayının 2 katına eşitse bu mükemmel sayıdır...(6,28,496)
  //? 6   = 1, 2, 3, 6 = 12  = 6*2
  //? 28  = 1, 2, 4, 7, 14, 28   = 56   = 28*2;


  function istEsPerfekt(a){
    let sum;
    let sumOfCommonDivisor = function (a) {
        let sum=0;
        for (i = 1; i <= a; i++) {
          if (a % i == 0) {
            sum += i;

          }
        }

        return sum;
      };
      
      if(sumOfCommonDivisor(a)==(2*a)){
        console.log(`${a} mükemmel sayidir.`)
      }else{
        console.log(`${a} mükemmel sayi degildir`)
      }
  }

  istEsPerfekt(6);
  istEsPerfekt(28);
  istEsPerfekt(15);