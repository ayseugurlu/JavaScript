// let isimler = ["harvey", "ashley", "tolga", "fatih", "gökce"];
// let bos = [];

// console.log(typeof isimler[0]);
// console.log(isimler.length);
// console.log(Boolean(bos));
// console.log(Boolean(bos.length));

// bos.length ? console.log("veri geliyor") : console.log("veri gelmiyor");

//for , while , do while , forEach

// for (let index = 0; index < isimler.length; index++) {
//     console.log(isimler[i]);

// }

// let sayac = 0;

// while (sayac < isimler.length) {
//   console.log(isimler[sayac]);
//   sayac++;
// }

// isimler.forEach((isim) => console.log(isim))

//! 1- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?

// let hello= "hello world"

// function findVowels (str){
//     let vowels="aeiouüAEIOUÜ"
//     let newString=""

//     for (let i=0 ; i < str.length ; i++){

//         if(vowels.includes(str[i])){

//             newString+=str[i]
//         }
//     }
//     return newString
// }

// console.log(findVowels(hello))

//! 2- Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız.

// let arr=[2,5,6,,23,89,21,11]

// let max;

// function sirala(num){
//     max=num[0]
//     for(let i=0 ; i< num.length ; i++){

//         if(num[i]>=max){
//           max=num[i]
//         }
//     }

//     return max
// }

// console.log(sirala(arr))

// console.log(arr.sort((a,b)=> a-b) )
// console.log(arr[arr.length-1])

//! 3- Bir dizi içerisindeki sayıları toplayan bir fonksiyon yazınız.

// function sumOfElement(arr){
//     let sum=0

//     for(i=0 ; i< arr.length ; i++){
//         sum+=arr[i]

//     }
//     return sum
// }

// let dizi=[1,2,3,4,5,6]
// console.log(sumOfElement(dizi))

//! 4- bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız?

// function ortalama(sum){

//     let ortalama=sumOfElement(sum)/sum.length
//     return ortalama
// }

// console.log(ortalama(dizi))

//! 5-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.

// function findWords(cümle){

//     const  newCümle=cümle.split(" ")

//     return newCümle.length

// }

// let cümle="Hasret rüzgarlari cok erken esti."

// console.log(findWords(cümle))

//! 6- Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.

// let sentence="Hayat cok garip"

// function reverseSent(cümle){

//     const  newArr=cümle.split(" ")
//     let newSentence=""

//     for(i=newArr.length-1 ; i>=0 ; i--){
//         newSentence+=" " +newArr[i]
//     }

//     return newSentence

// }

// console.log(reverseSent(sentence))

//*2.Yol

// let sent="Javascript harika bir dil"

// let word=sent.split(" ")

// let reverseSen=word.reverse().join(" ")
// console.log(reverseSen)

//! 7- Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.

// let isimler=[]
// let isim;

// while(isim!= "q"){
//      isim=prompt("lütfen bir isim giriniz ya da cikmak icin q ya basiniz")

//     isimler.push(isim)

//     if(isim=="q"){isimler.pop(isimler.length-1)

//     }

// }

// console.log(isimler)

//! 8- kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız

// function yasHesapla(isim,dt){
//     let guncelyil=new Date().getFullYear()

//     return console.log(`${isim} ${guncelyil-dt} yasindadir`  )

// }

// yasHesapla("ayse",1991)

// let ad=prompt("adiniz")
// let yas=+prompt("Dogum yiliniz")
// yasHesapla(ad,yas)

//! 9- isimler1 dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.

// const isimler1 = [
//     'Ahmet',
//     'mehmet',
//     'ismet',
//     'SAFFET',
//     'Can',
//     'Canan',
//     'Cavidan',
//   ];

//   const newa=[]

//   for(i=0 ; i<isimler1.length ; i++){
//   const isimlerNeu=isimler1[i].toLowerCase();
//   newa.push(isimlerNeu)
//   }

//   console.log(newa)

//! 10- Bir sayının faktöriyelini hesaplayan bir fonksiyon yazınız.

// function fakOfNum(number){
//     let sonuc=1;
//     for(i=1; i<=number ;i++){
//     sonuc*=i
// }
// return sonuc

// }

// console.log(fakOfNum(5))

//! 11- kayip sayiyi bulun.

//! 11- kayıp sayıyı bulun?
// const sal = [5,2,6,1,3,7]

// function FindFehlt(arr){

// console.log(arr.sort((a,b)=> a-b))

// for(let i=1 ; i<arr.length ; i++){

//     if(arr[i]-arr[i-1]==1){

//     }else{
//         console.log("kayip sayi" , arr[i]-1)
//     }
// }

// }

// FindFehlt(sal)

//! 12- let string="alti,bir,iki,dört,bes,üc,yedi,sekiz,dokuz"
//! 612453789  bu hale dönüştüren program

// function returnNumber(string) {
//   let array = string.split(",");
//   console.log(array);

//   let numbers = [];

//   for (i = 0; i < array.length; i++) {
//     if (array[i] == "sifir") {
//       numbers.push(0);
//     } else if (array[i] == "bir") {
//       numbers.push(1);
//     } else if (array[i] == "iki") {
//       numbers.push(2);
//     } else if (array[i] == "üc") {
//       numbers.push(3);
//     } else if (array[i] == "dört") {
//       numbers.push(4);
//     } else if (array[i] == "bes") {
//       numbers.push(5);
//     } else if (array[i] == "alti") {
//       numbers.push(6);
//     } else if (array[i] == "yedi") {
//       numbers.push(7);
//     } else if (array[i] == "sekiz") {
//       numbers.push(8);
//     } else if (array[i] == "dokuz") {
//       numbers.push(9);
//     } else {
//       numbers.push("");
//     }
//   }

//   return numbers.join("");
// }

// let dize = "alti,bir,iki,dört,bes,üc,yedi,sekiz,dokuz";
// console.log(returnNumber(dize));

//! 13- Size bir dizi kelime verildi. "Nemo" kelimesini bulmanız ve şuna benzer bir dize döndürmeniz gerekir:
//? "[Nemo'yu bulduğunuz kelimenin sırası] 'nda Nemo'yu buldum!"

//? Nemo'yu bulamıyorsanız, "I can't find Nemo :(" yazın.

//? findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

//? findNemo("Nemo is me") ➞ "I found Nemo at 1!"

//? findNemo("I Nemo am") ➞ "I found Nemo at 2!"

// function findNemo(string) {
//   let array = string.split(" ");
//   //   console.log(array);

//   for (i = 0; i < array.length; i++) {
//     if (array[i] == "Nemo") {
//       return `I found Nemo at ${i+1}!`;
//     }
//   }

//   return "I can't find Nemo :(";
// }

// console.log(findNemo("I am finding Nemo !"));
// console.log(findNemo("Nemo is me"));
// console.log(findNemo("I am Nemo"));
// console.log(findNemo("I am here"));

//*2.Yol

// function findNemo(sentence) {
//     if (sentence.includes("Nemo ")) {
//       return "I found Nemo at " + (sentence.split(" ").indexOf("Nemo") + 1) + "!";
//     } else {
//       return "I can't find Nemo :(";
//     }
//   }

//! 14- Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program

// let dizi1=[1,1,5,3,2,3,8,1,5]
// function entfernDuplikat(array){
//     let newArray=[]
//     for(i=0 ; i<array.length ; i++){
//     if(!newArray.includes(array[i])){
//         newArray.push(array[i])
//     }
// }
// return newArray
// }

// console.log(entfernDuplikat(dizi1))