// *ARITMETIK OPÜERATORLÖR * //

const kola=50;
const cips=30;
const dondurma=20;

console.log(kola+cips+dondurma);

let toplam=kola+cips+dondurma;

console.log(toplam);

//bir arttir

toplam++;
toplam=toplam+1;

console.log(toplam);

toplam=toplam+10;
console.log(toplam);

toplam+=10 //toplam=toplam+10; kisa halidir bu tercih edilir

console.log(toplam);

//? + operatörü string concatination islemi de yapar

const sayi1="3";
const sayi2=8;

console.log(sayi1+sayi2);//38
console.log(sayi1-sayi2);//-5

//! BACKTICKS (template literats)

const ad="erkan";
const soyad="sevim";

console.log(ad + soyad);//erkansevim

console.log("adim soyadim:" + " " + ad + " " + soyad);

//``

console.log(`adim soyadim ${ad} ${soyad}`);

const dogumTarihi=1979;
console.log(`${ad} ${soyad} ${2024-dogumTarihi} yasindadir`); //erkan sevim 44 yasindadir

//? Bazı fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

//toFixed(x) //*virgülden sonra x adet basamak birak
const ab=1.3;
console.log(Math.trunc(ab));
console.log(Math.floor(ab));
console.log(Math.ceil(ab));
console.log(Math.round(ab));

console.log("*****************");

const ba=-1.3;
console.log(Math.trunc(ba));
console.log(Math.floor(ba));
console.log(Math.ceil(ba));
console.log(Math.round(ba));

console.log(Math.random());
console.log(Math.ceil(Math.random()*20));

const randomSayi=Math.random();
console.log(randomSayi);
console.log(randomSayi.toFixed(2));

console.log(Math.random().toFixed(4));


//*Arttirma Azaltma

let a=5;

console.log("ilk",a++); //5
console.log("ikinci", a); //6

let b=a++;
console.log(b);
console.log(a);

let c=10;
console.log("ilk", ++c);
let d=++c;//12
console.log(d);//12

let e=33;
console.log(--e); //32
console.log(e--);//32
console.log(e);

//!e yi 5 arttir
//e=e+5

console.log(e+=5);

//e yi 5 ile carp

console.log(e*=5);//180

//?Carpma ve üs alma

const PI=3.14;
const r=5;

const alan=PI*r**2;
console.log(alan);

//! Math pow (power) bir sayinin kuvvetini almak icin kullanilir.

console.log(PI*Math.pow(r,2));

// Math.sqrt : verilken degerin karekökünü verir

console.log(Math.sqrt(144));
console.log(144*(1/2));

// **********MOD ALMA**********

const number=456;
console.log(number%10);//6

console.log("onlar", Math.trunc(number/10)%10);

console.log("yüzler", Math.trunc(number/100));


// console.log(number = number +i2) 
// console.log(number -= i2) 
// console.log(number *= i2) 
// console.log(number /= i2)
// console.log(number %= i2) 

//* KARSILASTIRMA OPERATÖRLERI

const sayi4=4;

console.log(sayi4==4);//esit mi? //true
console.log(sayi4===4);//true
console.log(sayi4=="4");//true
console.log(sayi4==="4");//false

console.log(sayi4!=5);//true 5 e esit degil mi?

console.log(sayi4 != "4"); //false

console.log(sayi4>4); //false
console.log(sayi4>=4); //true

///**MANTIKSAL OPERATÖRLER(LOGICAL OPERATORS ) */
console.log("*********");
//?TRUE
console.log(Boolean(5));
console.log(Boolean(5.8));
console.log(Boolean(-5.8));
console.log(Boolean([1,2,5]));

//? 5 FALSY

console.log(Boolean(0));
console.log(Boolean(null));
console.log((""));
console.log(Boolean(undefined)
);
console.log(Boolean(NaN));


const v1=false || 0 || 12.6 || false || null ; //12.6
console.log(v1);console.log(Boolean(v1));//true

const v2=false || 0 || null || undefined|| NaN; //NaN
console.log(Boolean(v2));//false

const v3=5 && true && 0 && ""; 
console.log(v3);
console.log(Boolean(v3));//false

const v4= 5 && 12.6 && -7 ;
console.log(v4); //-7
console.log(Boolean(v4));//true
console.log(!v4);//false

//**TIP DÖNÜSÜMLERI */

const para=Number("1000")+ Number("900");
console.log(para);//1900

let aa=10;
let bb=`5`;

console.log(`toplama`, aa+bb);//105
console.log(`cikarma`, aa-bb);//5
console.log(`carpma`, aa*bb);//50
console.log(`bolme`, aa/bb);//2

console.log(aa+Number(bb)); //15
console.log(typeof bb); //string
console.log(bb**2);//25

let ee="123.45";

console.log(parseInt(ee)); // tam kismi alir number a cevirir.
console.log(parseFloat(ee));//virgüllü haliyle kalir number olur.

//"**********"

// //* .toString() Metodu numberları stringe çevirir

let f=123.45;
console.log(f.toString());//bu satirda stringe cevirir kslici degildir.
console.log(f);//type i number dir.

//* + ile de number a cevirebiliriz

console.log(+ee); //type i number dir
let i=+e; 
console.log(typeof i); //number
console.log(typeof ee); //string

//* .toFixed() noktadan sonra kaç basamak alacağımızı belirtir. Sayıyı stringe çevirir

let z=0.2354548;

console.log(+z.toFixed(2)); //0.23 ve koydugumuz + dan dolayi number dir.

//* Prompt komutu da toFixed gibi kullanilan sayiyi string yapar.

const age= prompt("lütfen yasinizi giriniz");

console.log(typeof age); //string

const age2=+prompt("lütfen yasinizi giriniz");

console.log(typeof age2); //number




//* Null Undefined NaN 

console.log(typeof null); //object
let n=null

console.log(Boolean(n));// false

console.log(null-5); //-5

console.log(null==undefined);//true
console.log(null===undefined);//false

console.log(Number("asdf"));
console.log(Number("1234"));
console.log(null===null);


//!GENEL KÜLTÜR

console.log(Number("0x11"));// x=hexa 16 lık taban 17

console.log(Number("0b101"));// b=binary 2 lik taban 5

console.log(Number("0o11")); // o=octal 8 lik taban 9



















