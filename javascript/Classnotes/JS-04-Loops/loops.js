// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

//? ornek1 ekrana 10 kere merhaba yazdırın

// for(let index=1 ; index<=10; index++){
//     console.log("merhaba");
//     console.error("yanlis");
// }

//? ornek2 1 den N e kadar olan sayilarinb toplami

// const N=+ prompt("lutfen bir sayi giriniz");

// let toplam = 0;

// for (let number = 1; number <= N ; number++) {
//   //console.log(number);

//   toplam = toplam + number;

// }

//  console.log(toplam);

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// let sayi = 15;
// let primeNumber = true;

// for (let i = 2; i < sayi; i++) {
//   if (sayi % i == 0) {
//     primeNumber = false;
//   }
// }

// console.log(primeNumber ? "asaldir" : "asal degildir");


//? 0-100 Arasinda 7 adet rastgele tam sayi üreten kodu for döngüsü ile yaziniz.


// for( let i=1 ; i<=7 ; i++){

//     let rastgele=Math.round(Math.random()*100)
//     console.log(rastgele);
// }


//****************** */ WHİLE*************
//*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz.

// let number =prompt("lütfen 1 ile 100 arasinda bir sayi giriniz");

// while(number<1 || number >100){
    
//     console.error("number 1 ile 100 arasinda olmali");

//     number = prompt("lütfen 1 ile 100 arasinda bir sayi giriniz.");
// }

// console.log("tebrikler sayi 1-100 arasinda")


//****************** */ DO-WHİLE*************
//*ORNEK1: do-while için 1-100  arasında bir sayı giriniz. aksi durumlarda alert verip, tekrar sayı isteyiniz


// let number1;
// do {
//      number1 = prompt("lütfen 1-100 arasinda bir sayi giriniz");
    
// } while (number1 <1 || number1 >100);

// console.log("tebrikler");


//! şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir


//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.

// let devam;

// do {
//     let vize =+ prompt("vize notunuzu giriniz");
//     let final = + prompt ("final notunuzu giriniz");

//     let gecmeNotu= 0.4*vize + 0.6 *final;

//     console.log(gecmeNotu >50 ? "tebrikler" : "kaldiniz");

//     devam=prompt("Devam etmek istorsaniz e yaziniz.");


    
// } while (devam.toLowerCase()=="e");

//? ORNEK3: klavyeden q karakteri girilene kadar sayı girişi isteyen bir programı döngü kullanarak yazınız.


// let sayi1;

// do {
//     sayi1= prompt("lütfen bir tusa basiniz.");

// } while (sayi1 != "q");

// console.log(" q yazildi. döngü bitti")


//!!!! GUESS NUMBER

//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır. 

const rastgele=Math.ceil(Math.random()*20);

console.log(rastgele);

let hak=5;

while(hak>0){

const guess=+prompt("sayi tahmin ediniz");



if(rastgele==guess){

    console.log("tebrikler dogru tahmin ettiniz.👯‍♂️");

    break;

}else if(rastgele > guess){

    console.log("Arttir📈");

    hak--;

}else{

    console.log("Azalt📉");

    hak--;
}

}

if(hak==0){
console.log("5 tahmin hakkiniz bitti");
}























