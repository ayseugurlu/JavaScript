// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):

//! * --------Function-Declaration----------------------------*/
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.


//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.

console.log("************ 1- FUNC DECLARATION *************");

//yazdir() //invoke ya da call islemi (fonksiyonu cagirma)

//* örnek1 
//?fonksiyonun tanimlanmasi
function yazdir(){

    console.log("nasilsin?")
}

yazdir() //burda da cagirabiliriz yukarda da

//*örnek2 parametreli fonksiyon

function adYazdir(a,b,c){
    console.log(a,b,c);

}

adYazdir("ayse", "mustafa", "ayca")
adYazdir("kemal", "fatih", "umut", "halil")


//*paramtereli, dönüs dgerli (return)
function yasHesapla(isim,tarih){

    console.log(`Benim adim ${isim} ve ben ${new Date().getFullYear()-tarih} yasindayim.`);

    return new Date().getFullYear() -tarih
}

// alert(yasHesapla("erkan", 1989))

const gokce=yasHesapla("gökce", 1988)//36
const rengin=yasHesapla("rengin", 2000)// 24 
const mehmet=yasHesapla("mehmet", 1990)//34

//alert((gokce+rengin+mehmet) / 3);

//*örnek4

//? tek cift sorgulamasi

console.log(isEvenOdd(5));
console.log(isEvenOdd(16));
console.log(isEvenOdd(5251));

function isEvenOdd(sayi){

   const sonuc= sayi%2==0 ? "cifttir" : "tektir"
    return sonuc;
}

//*örnek5 arguments keyword ü ile paramtere karsilama

function sumAll(){
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments.length);


    let toplam=0; 

    for(let i=0; i<arguments.length ; i++){

        toplam+=arguments[i];
    }

    // console.log(toplam);
    return toplam

}

alert( sumAll(12,34,23,54,45,31,7,5,899,90) );



