console.log("**** NEW GEN OPERATORS *****");

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product = {
  id: "12345",
  brand: "Apple",
  type: "smart phone",
  price: 3000, // heap
};
const product1 = {
  id: "12346",
  brand: "Samsung",
  type: "mobile phone",
  price: 2000, // heap
};

//? . notasyonu ile erisim mümkün

console.log(product.type);
let proPrice = product.price;
console.log(proPrice);
proPrice += 100; //steak
console.log(proPrice);
console.log(product.price);
// product.price=proPrice
// console.log(product.price)

//? square bracket

console.log(product["brand"]);

//? DESTRUCTURING yöntemi

//? Degisken isimleri objedeki key ler ile ayni olmalidir

let { id, price, brand, type } = product; //key lerin yazilma sirasi önemli degil ama isimleri product object nin key leri ile ayni olmali

console.log("ID:", id);
console.log("brand:", brand);
console.log("type:", type);
console.log("price:", price);
price += 500;
console.log(price);
console.log(product.price);
// product.price=price
// console.log(product.price)

//? Key lerdeki isim degisikleri : ile yapilir
const {
  id: pro1Id,
  price: pro1Price,
  type: pro1Type,
  brand: pro1Brand,
} = product1;

console.log(pro1Brand, pro1Id, pro1Price, pro1Type);

//? NESTED DESTR

const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
};

console.log(insanlar.kisi2.meslek);
console.log(insanlar["kisi2"]["meslek"]);

//? Level1 Destr

//   const {kisi1,kisi2}=insanlar
//   console.log(kisi1)

//? Level2 Destr

//   const {adi,soyadi,kimlikNo,maas,meslek}=kisi1
//   console.log(adi,kimlikNo,soyadi,meslek,maas)

//? Iki seviyeli Destr

const {
  kisi1: { adi, soyadi },
  kisi2: { adi: kisi2Ad, soyadi: kisi2Soyad },
} = insanlar;

console.log(kisi2Ad);

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

console.log("*****************");

team.forEach((person) => {
  console.log("Name:", person.name);
  console.log("Surname", person.surname);
  console.log("Job", person.job);
  console.log("age:", person.age);
  console.log("***************");
});

console.log("**************");

team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("Name2:", name);
  console.log("Surname2", surname);
  console.log("Job2", job);
  console.log("age2:", age);
  console.log("***************");
});

console.log("*****************");

team.forEach(({ name, surname, job, age }) => {
  console.log("Name3:", name);
  console.log("Surname3", surname);
  console.log("Job3", job);
  console.log("age3:", age);
  console.log("***************");
});

//! --------Function Destr Kullanimi-----------

const objGoster = function () {
  return {
    name1: "Hazel",
    surname1: "Nut",
    job1: "team lead",
    age1: 40,
  };
};

let { name1, surname1, job1, age1 } = objGoster();

console.log(name1);
console.log("age:", ++age1);

//Fonksiyon Parametresi

const data = {
  id: "123",
  desc: "This is top secret information",
  createdTime: "1980",
};

const printData = (data) => {
  console.log(`${data.id}-${data.desc}-${data.createdTime}`);
};

const printDataDestr = (data) => {
  const { id, desc, createdTime } = data;
  console.log(`${id}-${desc}-${createdTime}`);
};

const printDataAirr = ({ id, desc, createdTime }) => {
  console.log(`${id}-${desc}-${createdTime}`);
};

printData(data);
printDataDestr(data);
printDataAirr(data);

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

const people = ["Ali", "Veli", "Harvey", "Ashley"];

let ali = people[0];
console.log(ali);

const [kisi1, kisi2, , kisi4] = people; //burada sirlama önemli degismeyecekse de bir virgül daha koyup atlamaliyiz

console.log(kisi1, kisi2, kisi4);

//* ==============================================
//*  REST (...)
//* =============================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir.

//?ARRAY

const araclar = [
  "Kamyon",
  "Tir",
  "Kamyonet",
  "Motorsiklet",
  "Minibüs",
  "Taksi",
];

const [arac1, arac2, arac3, ...binekAraclar] = araclar; // dizilerde siralama önemli

console.log(arac3);
console.log(binekAraclar);

//? OBJECT

const person = {
  ad: "Hazel",
  soyad: "Nut",
  is: "team Lied",
  yas: 40,
};

const { ad, yas, ...geriKalan } = person; //objelerde siralama önemli degil atamalar haric olanlari geri kalanlara atar

console.log(geriKalan);

//! 2- Bir fonksiypnun argumanlkarini diziye cevirmek icin kullanilabilir

const topla = (a, b) => a + b;
console.log(topla(1,5,7,9,3))



const toplam=(...sayilar)=> {
    return sayilar.reduce((a,b)=>a+b)
}

//yukarda parametrenin önüne ... yazarsak gelecek bütün parametrelri kastetmis oluruz ve bunlari bir diziye cevirir.sonrasinda da gelen sayilar dizi old icin reduce uygulayabildik

console.log(toplam(1,5,7,9,3))

//? REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmiş olduk.

//* =============================================
//*  SPREAD (...)
//* =============================================


//? REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmiş olduk.

const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"]
const karaAracları = ["araba", "bisiklet", "marti"]

const tasitlar=[ucanAraclar,karaAracları]

console.log(tasitlar)

const flatTasitlar=[...ucanAraclar,...karaAracları]
console.log(flatTasitlar)


//? ornek

const cumle="Uzun ince bir yoldayim"
const cumleDizisi=[...cumle]
console.log(cumleDizisi)


//? Ornek

const numbers=[1,3,4,5]

console.log(Math.max(...numbers,))



//? nested
const sahislar = {
    sahis1: {
      name: "Can",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    sahis2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },
    sahis3: {
      name: "Steve",
      surname: "Job",
      dob: "2000",
      job: "developer",
      salary: "90000",
      drivingLicense: true,
    },
  }

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.
//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur

//! FOR IN

// for(let s in object){
//     //fonksiyonumuz
// }

for(let s in sahislar){
    console.log(sahislar[s].salary)
}

//? Kullanışlı Object metotları
console.log(Object.keys(sahislar)) //? objenin key'leri array olarak doner
console.log(Object.values(sahislar)) //? objenin value'larını array olarak doner
console.log(Object.values(sahislar.sahis2)) //? objenin value'larını array olarak doner
console.log(Object.entries(sahislar)) //? objenin key-value ciftini array olarak doner
console.log(Object.entries(sahislar.sahis1)) //? objenin key-value ciftini array olarak doner

//! FOR - OF

// for(let x of iterable ) {
// //*   code block to be executed
// }


for (const key of Object.keys(sahislar)) {
    console.log(sahislar[key].salary) //! square
}


console.log("************************")


for(let v of Object.values(sahislar)){
    console.log(v)
    console.log(v.name)
}