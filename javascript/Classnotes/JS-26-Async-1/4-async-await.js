//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//* Bir fonksiyonu async  hale getirmek icin fonksiyon keyword'nun onune async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi satirdaki kodun durdurulmasini saglar. Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.
//! JavaScript try anahtar kelimesi kod bloğundaki kodları çalışma zamanında test etmek için kullanılır.

//! JavaScript catch anahtar kelimesi çalışma zaman hatası sonucu oluşan hataları ekrana yazdırmak için kullanılır.

//! JavaScript throw anahtar kelimesi özel hata oluşturmayı sağlar.

//! JavaScript finally anahtar kelimesi hata oluşması veya oluşmaması durumunda (her durumda) çalışacak kodları yazdırmak için kullanılır.

const getData = async () => {
  try {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=girls");

    //? error handling
    if (!res.ok) {
      throw new Error(`URL de hata var ${res.status}`);
    }

    const veri = await res.json();

    ekranaBastir(veri);
  } catch (error) {
    console.log(error);
    console.log("try catch sayesinde kod devam ediyor");

    document.querySelector("section").innerHTML = `<h1>${error}</h1>
    <img src="./img/404.avif"/>`;
  }
};

getData();

const ekranaBastir = (data) => {
  // const div = document.createElement("div")
  // const users = document.querySelector("section").appendChild(div)

  data.forEach((program) => {
    document.querySelector("section").innerHTML += `
        
        <h1 class="text-danger" >${program.show.name}</h1>
        <img src="${program.show.image?.medium || defaultImage}"/>
        
         
        `;
  });
};
