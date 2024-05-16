//! ^ And operatörü

//  & Truthy value with &&
// console.log(2 && 5); //5

// console.log(Boolean(2 && 5));

// & object / Array  with &&

// console.log({} && "Hello"); //Hello
// console.log([] && "Hello"); //Hello

// console.log(Boolean([])); //true
// console.log(Boolean({})); //true

// & Falsy value with &&
// console.log(0 && 7); //0
// console.log("0" && 7); // 7
// console.log(Boolean(0));

//! & Falsy string with &&

// console.log("" && "World"); // ilk değer boş string döner
// console.log("" && "World"); // bos döner
// console.log(`` && "World"); // bos döner

// // & Falsy null with &&

// console.log(null && "Hello World"); //null
// console.log(NaN && "Hello World"); //NaN
// console.log(null && NaN); //null


//!  ^ OR operatörü ||

//! & Truthy value with ||

// console.log(2 || 5) //2

//! & Falsy value with ||

// console.log(0 || 7) //7

// console.log(0 || '') //boş string döner

// & object / Array  with ||
// console.log({} || "Hello"); // {}
// console.log([] || "Hello"); // []

//! & Falsy null with ||

// console.log(null || 1) //1
// console.log(null || NaN) //NaN 


 //? Soru 1 : 18 yaşından büyüklerin sigara kullanabileceği 18 yaşından küçüklerin sigara kullanamayacağını if else yapısı ile konsola yazdıran kodu yazınız. 

//  let age=+prompt("Lütfen yasinizi giriniz");

//  if(age>=18){
//     console.log("Sigara kullanabilirsiniz")
//  }else{
//     console.log("Sigara kullanamazsiniz")
//  }

// let age=+prompt("Lütfen yasinizi giriniz");

// age>=18 ? console.log("sigara kullanabilirsiniz") : console.log("sigara kullanmazsioniz")

//! * isNaN() //sayi degil demi diye sorar

// let x= +prompt("Bir sayi giriniz")
// console.log(isNaN(x));


//? kullanıcının sayı girene kadar tekrar giriş yapmasını sağlayan while yapısını yazın.

// let num=+prompt("lütfen bir sayi giriniz");

// while(isNaN(num)){
    

//     num=+prompt("lütfen bir sayi giriniz")

// }

// console.log("bu bir sayidir")


// let num;
// do{num=+prompt("lütfen bir sayi giriniz")}
// while(isNaN(num))

// console.log("bu bir sayidir")

//? *örnek3 Kullanıcı adı ve parola kontrolü yap. Doğru ise ismiyle karşıla değilse tekrar girmesi için yönlendir. 3 kez yanlış giriş olursa çıkış yapsın

// let user = "Mark";
// let password = "1234";

// let loginCount = 3;

// while (loginCount > 0) {
//   let userid = prompt("Kullanıcı adınızı girin:");
//   let userpw = prompt("Parolanızı girin:");

//   if (userid === user && userpw === password) {
//     alert(`Merhaba, ${userid}! Sayfamıza hoşgeldiniz.🎉🎉`);
//     break;
//   } else {
//     loginCount--;
//     if (loginCount > 0) {
//       alert(`Kullanıcı adı veya parola yanlış girdiniz. Kalan giriş hakkı: ${loginCount}`);
//     } else {
//       alert("Giriş hakkınız kalmadı.Güle güle..");
//     }
//   }
// } 

//?  //piramid 
//*      #
//*     ###
//*    #####
//*   #######
//*  #########

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let row = '';
//     for (let b = 1; b <= rows - i; b++) {
//         row += ' ';
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '#';
//     }
//     console.log(row);
// }

//? **örnek */
//     * 
//     * *  
//     * * * 
//     * * * *  
//     * * * * *

// let size = 5;
// for (let i = 1; i <= size; i++) {
//     let row = ' ';
    
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row +='* ';
//     }
   
//     console.log(row);
// }

//? *örnek5 kullanıcıdan alınan 5 adet sayının ortalamasını konsola yazdırınız ?

// let sayi;
// let toplam=0
// let ortalama;

// for(let i=1 ; i<=5 ; i++){
//     sayi=+prompt("lütfen sayi giriniz");
//     toplam=toplam + sayi;
    
// }

// ortalama= toplam/5;

// console.log("ortalama=",ortalama);


//? *örnek6 1000 ile 2000 arasındaki hem 3 hem 5 e bölünebilen sayıların adedini konsola yazdıran çözüm

// let counter=0;

// for(let i=1000 ; i<=2000 ; i++){
//     if(i%15===0){
//         counter++;
//         console.log(i);
//     }
// }

// console.log("toplam:",counter);

//? //!  verilen sayının tüm basamaklarının sayı değerlerinin basamak adedi kuvveti kadar toplamı kendisine eşitse bu bir armstrong sayıdır.

// let num = +prompt("Enter a number:");
// let originalNumber = num;
// let sayac = 0;
// let sum = 0;



// while (originalNumber != 0) {
//   originalNumber = Math.floor(originalNumber / 10);
//   console.log(originalNumber);
//   sayac++;
// }

// originalNumber = num;

// while (originalNumber > 0) {
//   let sayi = originalNumber % 10;
//   sum += sayi ** sayac;
//   originalNumber = Math.floor(originalNumber / 10);
// }

// sum == num
//   ? console.log(num + " is an Armstrong number.")
//   : console.log(num + " is not an Armstrong number.");






