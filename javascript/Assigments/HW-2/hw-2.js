//* Klavyeden Q veya q karakteri girilene kadar not giris yapan ve bu karakterlerden birisi girildiginde o ana kadar girilen tüm notlarin ortalamasini hesaplayarak konsola ortalamayi bastiran uygulamayi yaziniz.

// let noten = prompt("lütfen notlarinizi giriniz.");

// let sum = 0;
// let ortalama = 0;
// let counter = 0;

// while (noten != "q" && noten != "Q") {

//   counter++;

//   sum += +noten;

//   noten = prompt(
//     "lütfen notlarinizi giriniz. Eger bittiyse cikmak icin q/Q ya basiniz."
//   );
// }

// console.log((ortalama = sum / counter));

//*//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

// const rastgele = Math.ceil(Math.random() * 20);

// console.log(rastgele);

// let hak = 5;

// function oyunBaslasin() {
//   while (hak > 0) {
//     const guess = +prompt("sayi tahmin ediniz");

//     if (rastgele == guess) {
//       console.log("tebrikler dogru tahmin ettiniz.👯‍♂️");

//       break;
//     } else if (rastgele > guess) {
//       console.log("Arttir📈");

//       hak--;
//     } else {
//       console.log("Azalt📉");

//       hak--;
//     }
//   }
// }

// oyunBaslasin();

// if (hak == 0) {
//   console.log("5 tahmin hakkiniz bitti");

// }
// const soru = prompt("Tekrar oynamak ister misiniz? Cevap: E / H");
//   if (soru == "E" || soru == "e") {
//     oyunBaslasin();
//     hak=5;
//     console.log("başlıyomu3");

//   } else {
//     console.log("Oyun oynadiginiz icin tesekkürler. Iyi günler!");
//   }

//*taban ve yükseklik degerlerini parametre olarak alan ve bir ücgenin alanini hesaplayarak ana programa döndüren fonksiyonu yaziniz.

// function areaOftriangle(base, height) {
//   base = +prompt("Enter the base value of the triangle.");
//   height = +prompt("Enter the height value of the triangle.");
//   let A = (1 / 2) * (base * height);

//   return A;
// }

// console.log(areaOftriangle(4, 5));


//*kareAl, küpAl, üsAl seklinde üc adet farkli arrow fonksiyonu tanimlayin. Bu fonksiyonlarin ana programdan gerken parametreleri alarak sonuclari ana programa döndürmeleri gerekmektedir.

// const kareAl=(a) => a**2;

// console.log(kareAl(2));


// const kupAl=(b) =>  b**3;

// console.log(kupAl(3));

// const usAl=(a,b) => a**b;

// console.log(usAl(2,3));


//* yil degerini parametre olarak alan ve bu yilin artik yil olup olmadigini hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression yöntemi ile yaziniz. Not: Yil 4e tam bölünüyorsa ve (100e tam bölünmüyorsa veya 400e tam bölünüyorsa) artik yildir aksi takdirde degildir.

const artikYilmi = function(year){

    if(year%4==0 && year%100!=0){
        console.log(`${year} artik yildir.`)
    } else if(year%4==0 && year%400==0){
        console.log(`${year} artik yildir.`)
    }else{
        console.log(`${year} artik yil degildir.`)
    }

    
}
artikYilmi(2000);
artikYilmi(1980);
artikYilmi(2024);
artikYilmi(1991);
artikYilmi(2056);
artikYilmi(2028);






