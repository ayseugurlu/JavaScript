// // ?=========================================================
// // ?                DİZİLER (ARRAYS)
// // ?=========================================================

// //* Dizi Tanımlama
// //* ---------------------------------------------------------


// //! 1.Yöntem (Array literal) tercih edilen yöntem

// const yaslar=[30,29,45,27,12]

// console.log(yaslar)

// // yaslar=[1,2,3]//  Assignment to constant variable.

// //! 2.Yöntem (Array constructur)

// const cars=new Array("BMW", "Mercedes", "Volvo")
// console.log(cars);

// const birth=1979

// const isimler=["erkan", "ayca", "mustafa", 2024-birth ,"kemal", true, yaslar]

// console.log(isimler)

// console.log(isimler[2]) //mustafa
// console.log(isimler[6][1])// yaslar dizisinin 1 index li elemanina ulastik

// console.log(--isimler[6][1]);
// console.log(isimler[6][1]);
// isimler[5]=false;
// console.log(isimler[5])


// // ?=========================================================
// // ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// // ?=========================================================

// //*pop() dizinin son elemanını siler, yazdırırsak sildiği elemanı döndürür

// const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];

// meyveler.pop()

// console.log(meyveler);
// console.log(meyveler.pop());



// //*shift() dizinin ilk elemanını siler, yazdırırsak sildiği elemanı döndürür

// console.log(meyveler.shift());
// console.log(meyveler);


// //*push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

// console.log(meyveler.push("cilek" ,"Kavun", "karpuz"))// yazdirirsak güncel eleman sayisini gösterir

// console.log(meyveler)

// //*unshift() dizinin başına eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

// meyveler.unshift("Ayva")
// console.log(meyveler);

// //*reverse() dizinin tamamını ters çevirir

// meyveler.reverse()

// console.log(meyveler);

// console.log(meyveler[3].split("").reverse()) // ['t', 'u', 'm', 'r', 'A']

// //*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
// //*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
// //*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz

// meyveler.splice(2,1,"Ananas")//1 yazdigimiz icin cilegi silip yerine ananas yazdi
// console.log(meyveler);

// meyveler.splice(3,0,"çilek")// 0 yazdigi icin armutu silmedi saga ittirip kiraz yazdi
// console.log(meyveler);

// meyveler.splice(4,1)//4 index li elemani sildi

// console.log(meyveler);

// //*sort(), string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
// //* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.

// meyveler.sort()
// console.log(meyveler);

// const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];

// number.sort()
// console.log(number); // [1, 10, 22, 231, 3, 35, 5, 55, 77]

// number.sort((a,b) => a-b ) //tüm ikili kombinasyonlari kontrol eder ve kücukten büyüge siralar

// console.log(number);//[1, 3, 5, 10, 22, 35, 55, 77, 231]


//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================

const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];

//**includes */

console.log(sayilar1.includes(5));
console.log(sayilar1.includes("5"));

//*****indexOf() , lastIndexOf */

console.log(sayilar1.indexOf("uc"))

console.log(sayilar1.indexOf(5));
console.log(sayilar1.lastIndexOf(5));
console.log(sayilar1.indexOf(5,2))

//********** */ Örnek
//* kullanıcıdan sayı isteyin. girilen sayının hem string hem number hali sayılar dizisinde var mı araştır, varsa index ini döndür
// const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];

// const sayiString=prompt("lütfen bir sayi giriniz")
// const sayiNumber=Number(sayiString)

// if(sayilar1.includes(sayiString)){
//     console.log("aradiginiz sayinin string hali dizide var", sayilar1.indexOf(sayiString))


// }else {
//     console.log("aradiginiz sayinin string hali yok")
// }

// if(sayilar1.includes(sayiNumber)){
//     console.log("aradiginiz sayinin number hali dizide var", sayilar1.indexOf(sayiNumber))


// }else {
//     console.log("aradiginiz sayinin number hali yok")
// }

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join("x")=>varolan virgül+boşluk sil, elemanların aralarına x koy(mesela join parantezinde boşluk yerine 2 varsa her eleman arasına 2 koy demek) 
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez

console.log(sayilar1.join(" "))
console.log(sayilar1.join(""))
console.log(sayilar1.join("A"))

const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];
console.log(meyveler[3].split("").reverse().join(""));

//**toString */

//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar1.toString())

//*****slice() */

const araba=["bmw","mercedes","audi","ferrari","lamborgini"]

console.log(araba.slice(3))
console.log(araba.slice(1,3))

//*******concat */

const kisiler=["özlem","esra", "nihal", "fatih","hüseyin"]
const rakamlar=[1,2,3,4,5,6]

console.log(kisiler.concat(rakamlar))

const birlesik=kisiler.concat(rakamlar,true,"ayse", "gökce",[["fatih","kemal"]],3,["ayca","mustafa"],5)

console.log(birlesik)

//***every()  */

//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yas=[18,23,35,45,56,89,15]

console.log(yas.every((a)=> a>=18))//false
console.log(yas.every((a)=> a<90))//true

//!1 tane bile şarta uymayan varsa false döndürür, hepsi şarta uyarsa true döndürür

//***some */

//? Aldigi callback fonksiyonuna (bizim yazdığımız fonksiyon) gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

console.log(yas.some((osman)=> osman>70 ))//true
console.log(yas.some((osman)=> osman>90)) //false


