// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

//!önce fonksiyon olusturmak sart

const isEvenOdd = function (sayi) {
  return sayi % 2 == 0 ? "cifttir" : "tektir";
};

const sonuc = isEvenOdd(5);
console.log(sonuc);

//*örnek2 verilen 3 sayidan en büyügü bul

const buyukBul = function (a, b, c) {
  let enBuyuk;

  if (a > b && a > c) {
    enBuyuk = a;
  } else if (b > a && b > c) {
    enBuyuk = b;
  } else enBuyuk = c;

  // console.log(enBuyuk);

  return enBuyuk;
};

buyukBul(3, 4, 5);
// alert(buyukBul(4, 8, 2));

//*örnek3 arguments keyword ü ile

const enBul = function () {
  let biggest = arguments[0];
  let smallest = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > biggest) {
      biggest = arguments[i];
    }

    if (arguments[i] < smallest) {
      smallest = arguments[i];
    }
  }

  // console.log(biggest);
  return ` ${biggest}   ${smallest}`;
  
};

// alert(enBul(34, 223, 52, 6543, 215, 63, 2, 667, 332));


//*örnek4 bir fonsiyonunun icinden baska bir fonksiyon cagirilabilir.

const usAl=function(a,b){
    return a**b;
}

const cevreBul=function(a,b){
    return (a+b)*2;
}

const alanBul =function(a,b){
    return a*b
}

const hesapla = function(secim, s1, s2){

    if(secim=="usAlirmisin"){
        console.log(usAl(s1,s2))

    }else if(secim=="cevreBulurmusun"){
        console.log(cevreBul(s1,s2))
    }else if(secim=="alanBulurmusun"){
        console.log(alanBul(s1,s2))
    }

}

hesapla("usAlirmisin",3,5)
hesapla("cevreBulurmusun",13,15)
hesapla("alanBulurmusun" , 2,4)


//*ornek5:-------------------------------------------------------------------------- 
//Bir ülkedeki ortalama yaşam ömrü 95 yıl olduğuna göre, 
// doğum yılı girilen kişinin yaşını hesaplattıran
// yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program

// 0-10 : " Sen bu değerleri önemseme hayatın tadını çıkar"
// 10-20 : " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. "

/* -----------------------------------------------------------*/

const calculate=function(birth){
    
    const ortOmur=95

    const kalanOmur= ortOmur -(2024-birth)

    if(kalanOmur>0 && kalanOmur<=10){
        return "Sen bu değerleri önemseme hayatın tadını çıkar"
    }else if(kalanOmur>10 && kalanOmur<=20){

        return "Gezmek görmek istediğin yerler varsa yola çıkma zamanı.."
    }else return `${kalanOmur} yilin var sen daha calis ilerde gezersin.`
}

console.log(calculate(prompt("lütfen dogum yilinizi giriniz")))