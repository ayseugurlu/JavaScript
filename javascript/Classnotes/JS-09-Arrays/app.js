// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------


//! 1.Yöntem (Array literal) tercih edilen yöntem

const yaslar=[30,29,45,27,12]

console.log(yaslar)

// yaslar=[1,2,3]//  Assignment to constant variable.

//! 2.Yöntem (Array constructur)

const cars=new Array("BMW", "Mercedes", "Volvo")
console.log(cars);

const birth=1979

const isimler=["erkan", "ayca", "mustafa", 2024-birth ,"kemal", true, yaslar]

console.log(isimler)

console.log(isimler[2]) //mustafa
console.log(isimler[6][1])// yaslar dizisinin 1 index li elemanina ulastik

console.log(--isimler[6][1]);
console.log(isimler[6][1]);
isimler[5]=false;
console.log(isimler[5])


// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// ?=========================================================

//*pop() dizinin son elemanını siler, yazdırırsak sildiği elemanı döndürür

const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];

meyveler.pop()

console.log(meyveler);
console.log(meyveler.pop());



//*shift() dizinin ilk elemanını siler, yazdırırsak sildiği elemanı döndürür

console.log(meyveler.shift());
console.log(meyveler);


//*push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

console.log(meyveler.push("cilek" ,"Kavun", "karpuz"))// yazdirirsak güncel eleman sayisini gösterir

console.log(meyveler)

//*unshift() dizinin başına eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

meyveler.unshift("Ayva")
console.log(meyveler);

//*reverse() dizinin tamamını ters çevirir

meyveler.reverse()

console.log(meyveler);

console.log(meyveler[3].split("").reverse()) // ['t', 'u', 'm', 'r', 'A']

//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz

meyveler.splice(2,1,"Ananas")//1 yazdigimiz icin cilegi silip yerine ananas yazdi
console.log(meyveler);

meyveler.splice(3,0,"çilek")// 0 yazdigi icin armutu silmedi saga ittirip kiraz yazdi
console.log(meyveler);

meyveler.splice(4,1)//4 index li elemani sildi

console.log(meyveler);

//*sort(), string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.

meyveler.sort()
console.log(meyveler);

const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];

number.sort()
console.log(number); // [1, 10, 22, 231, 3, 35, 5, 55, 77]

number.sort((a,b) => a-b ) //tüm ikili kombinasyonlari kontrol eder ve kücukten büyüge siralar

console.log(number);//[1, 3, 5, 10, 22, 35, 55, 77, 231]
