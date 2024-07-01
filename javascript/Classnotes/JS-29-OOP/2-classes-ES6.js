//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.


class Book {

    constructor(a,b,c){
       this.title=a;
        this.author=b;
       this.year=c,

       this.ozetFunction=function(){
  
        return `${this.title} kitabini ${this.year} yilinda ${this.author} yazmistir`
      }

    }

    yilHesapla(){

        return 2024 - this.year;
    }
}




//? new keyword ü  Book Constructor ı parametrelerle çağırır.
//? Constructor, Book object in bir örneğini kalıbını oluşturur.
//? Constructor daki tüm variablelar ve functionlar, oluşturulan her  single örneğe (instance a çocuklara) eklenir
const book1 = new Book("safahat", "mehmet akif ersoy", 1910)
const book2 = new Book("nutuk", "m.kemal atatürk", 1938)

console.log(book1)
console.log(book1.year)
console.log(book1.ozetFunction())
console.log(book1.yilHesapla())

console.log(book2)

//? INHERITANCE
//* Book object kalibindan Dergi  object ine kalip getir

class Dergi extends Book {

    constructor(title, author,year, d){
        super(title, author, year)
        this.mounth = d
    }
}

const dergi1 = new Dergi("Kasagi", "Ömer seyfettin" , 1900, "aralik")

const dergi2= new Dergi("ask-i memnu", "halit ziya", "eylül")

//! extends edildiği zaman, atadan gelen her veriyi kullanmak zorundayız, en fazla value kısmını boş " " bırakabiliriz

console.log(dergi1)
console.log(dergi1.ozetFunction())
console.log(dergi1.yilHesapla())
console.log(dergi2)
