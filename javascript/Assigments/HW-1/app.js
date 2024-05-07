//Ex1: Girilen not degerine karsilik gelen harfli notu bildiren programi yaziniz.
// * 0-25 arasi FF
// * 26-45 arasi DD
// * 46-65 arasi CC
// * 66-75 arasi BB
// * 76-90 arasi BA
// * 91-100 arasi AA
// * 100 den büyük veya 0 dan kücük degerlerde hata mesaji verecektir.

// let grade=+prompt("Lütfen notunuzu giriniz.");

// if( grade>=0 && grade<26){
//     console.log("Notunuz", "FF")
// }else if( grade>=26 && grade<46){
//     console.log("Notunuz", "DD")
// }else if(grade>=46 && grade<66){
//     console.log("Notunuz", "CC")
// }else if(grade>=66 && grade<76){
//     console.log("Notunuz", "BB")
// }else if(grade>=76 && grade<91){
//     console.log("Notunuz", "BA")
// }else if(grade>=91 && grade<=100){
//     console.log("Notunuz", "AA")
// }else{alert("Hatali bir sayi girdiniz. Notunuz [0,100] araliginda olmalidir.")}

//Ex2: Girilen ay ismine karsilik gelen sira numarasi veren programi switch-case yapisi kullanarak yaziniz. 

// let month=prompt("Ay ismi giriniz.");

// switch(month){
//     case "ocak": console.log("1.");
//     break
//     case "subat":console.log("2.");
//     break
//     case "mart": console.log("3.");
//     break
//     case "nisan": console.log("4.");
//     break
//     case "mayis": console.log("5.");
//     break
//     case "haziran": console.log("6.");
//     break
//     case "temmuz": console.log("7.");
//     break
//     case "agustos": console.log("8.");
//     break
//     case "eylül": console.log("9.");
//     break
//     case "ekim": console.log("10.");
//     break
//     case "kasim": console.log("11.");
//     break
//     case "aralik": console.log("12.");
//     break

// }

// * Girilen farkli 3 tam sayinin toplamini, carpimini, en kücügünü ve en byügünü yazdiran programi yaziniz.

// let a=parseInt(prompt("Lütfen 1. tam sayiyi giriniz"));
// let b=parseInt(prompt("Lütfen 2. tam sayiyi giriniz"));
// let c=parseInt(prompt("Lütfen 3. tam sayiyi giriniz"));
//  console.log("Toplam=", a+b+c);
//  console.log("Carpim=", a*b*c);

//  if(a>=b && a>=c){
//     console.log(`Bu sayilarin en büyügü ${a} dir.`);
//  }else if(b>=a && b>=c){
//     console.log(`Bu sayilarin en büyügü ${b} dir.`);
//  }else if(c>=a && c>=b){
//     console.log(`Bu sayilarin en büyügü ${c} dir.`);
// }

// if(a<=b && a<=c){
//     console.log(`Bu sayilarin en kücügü ${a} dir.`);
//  }else if(b<=a && b<=c){
//     console.log(`Bu sayilarin en kücügü ${b} dir.`);
//  }else if(c<=a && c<=b){
//     console.log(`Bu sayilarin en kücügü ${c} dir.`);
// }


//Ex4: Girilen sayilarin tek ya da cift oldugunu bildiren programi tasarlayiniz.

// let num=+prompt("Lütfen bir tam sayi giriniz");

// (num%2==0) ? console.log("Bu bir cift sayidir") : (num%2==1 || num%2==-1) ?  console.log("Bu bir tek sayidir.") : ""


//Ex5: Girilen dereceyi fahrenayta ve ya fahrenayti derece ceviren programi yaziniz.

// let C; 
// let F;

// let soru=prompt("Dereceyi fahrenayta dönüstür.(evet/hayir)")
// let cevap;

// if(cevap==="evet"){
//     C=+prompt("dereceyi giriniz");
//     F= C*1.8+32;
//     console.log( `${C}°C ${F}°F dir.`);
// }else{
//      F= +prompt("Fahrenayti giriniz");
//      C=(F-32)/1.8;
//      console.log( `${F}°F ${C}°C dir.`);

// }


