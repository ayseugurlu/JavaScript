let buton1 = document.getElementById("myButton");
let sonuc = document.getElementById("result");

// console.log(buton1)
// console.log(sonuc)

//! Callback yazim cesitleri

//? 1.yol
// buton1.addEventListener("click", function konsol(){

//     console.log("button1 clicked")
// })

//? 2.Yol (fonksiyon ismi opsiyonel)

// buton1.addEventListener("click", function(){
//     console.log("button1 clicked")
//     sonuc.innerText="Button1 clicked"
// })

// buton1.addEventListener("dblclick", function(){
//     console.log("button1 double clicked")
//     sonuc.innerText="Button1 double clicked"
// })

//? 3. yol disardan arrow / expression(named) fonksiyon cagirma

// const clicked2 = () => {sonuc.textContent = "Button1 clicked"};

// buton1.addEventListener("click", clicked2) //cagirma parantezleri olmayacak yoksa direk butona tiklanmadan calisir

//? 4.yol disardan fonksiyon cagirmak

// function clicked () {

//     sonuc.textContent += "Button 1 clicked function called from outside"
// }

// buton1.addEventListener("click", clicked) //foksiyonu normal fonk yazdigimiz icin yukarda önce cagirip sonra fonk da yazabilirdik

//? mouseover mouseout eventleri

// let myImg = document.getElementById("myImage")
// console.log(myImg)

// myImg.addEventListener("mouseover", ()=>{
//     myImg.style.width="300px"
//     console.log("image 300px oldu")
// })

// myImg.addEventListener("mouseout", ()=>{
//     // myImg.style.width="100px"
//     myImg.style.display="none"
//     console.log("image 100px oldu")
// })

// buton1.addEventListener("click", ()=>{
//     myImg.style.display="block"
// })

//? Drop down menu

// let secim = document.getElementById("colors");

// secim.addEventListener("change", () => {
//   // console.log("degisti")

//   let selectedColor = secim.value;
//   console.log(selectedColor); //degisen rengi yakaldik

//   document.getElementById(
//     "selectedColorP"
//   ).textContent = `Secilen Renk: ${selectedColor}`;

//   document.body.style.backgroundColor = selectedColor;
// });

//? Random backgroundcolor

// Math.floor(Math.random() * 256) ifadesine bakalım:
// Math.random() 0 (dahil) ile 1 (hariç) arasında bir sayı üretir.
// Bu sayı 256 ile çarpıldığında, 0 (dahil) ile 256 (hariç) arasında bir sayı elde edilir.
// Math.floor() bu sayıyı aşağı yuvarlayarak 0 (dahil) ile 255 (dahil) arasında bir tam sayı elde etmemizi sağlar.
// Örneğin:
// Eğer Math.random() 0.5 dönerse, 0.5 * 256 = 128 olur ve Math.floor(128) 128 döner.
// Eğer Math.random() 0.999 dönerse, 0.999 * 256 = 255.744 olur ve Math.floor(255.744) 255 döner.
// Eğer Math.random() 0 dönerse, 0 * 256 = 0 olur ve Math.floor(0) 0 döner.
// Eğer 255 yazsaydık, Math.random() * 255 0 (dahil) ile 255 (hariç) arasında bir sayı üretirdi ve Math.floor() bunu 0 (dahil) ile 254 (dahil) arasında bir tam sayıya yuvarlardı. Bu, 255'i elde edemeyeceğimiz anlamına gelir.
// Dolayısıyla, 0 ile 255 arasında bir tam sayı (yani 256 farklı değer) elde etmek için çarpanı 256 olarak kullanırız. Bu, özellikle RGB renk bileşenleri gibi 8-bit değerler için geçerlidir, çünkü her bir renk bileşeni 0 ile 255 arasında değişir.

//random renk
// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// const buton2 = document.getElementById("colorButton");

// const colors = [];
// const colorL = document.getElementById("colorList");

// buton2.addEventListener("click", () => {
//   const renk = getRandomColor();
//   // console.log(renk)
//   const colorObject = { color: renk };
//   colors.push(colorObject);
//   console.log(colors);
//   document.body.style.backgroundColor = renk;

// //yeni rengi ekrana listeleme
// const listItem = document.createElement("li");
// listItem.style.backgroundColor = renk;
// listItem.textContent = renk

// listItem.addEventListener("click", ()=>{
//     document.body.style.backgroundColor=renk
// }) //list istem lara da click eklersek renge tikladigimizda geri o renge body yi döndürür
// // colorL.appendChild(listItem)
// colorL.prepend(listItem) //üste ekleyerek devam eder eskisi altta kalir

// });


//! Telefon Örnegi

// let resim=document.querySelector(".resim")
// let ses1=document.querySelector(".ses1")
// let ses2=document.querySelector(".ses2")
// let ara=document.querySelector(".ara")
// let baglat=document.querySelector(".baglat")
// let konus=document.querySelector(".konus")
// let kapat=document.querySelector(".kapat")

// //Ara Butonu

// ara.addEventListener("click", ()=>{

//     ses2.play()
//     ses2.volume=0.1
// } )

// baglat.addEventListener("click",()=>{
//     ses2.pause()
//     ses1.play()
//     ses1.volume=0.1
//     resim.src="./helpers/connect.jpg"

// })

// konus.addEventListener("click",()=>{
//     ses1.pause()
//     ses2.pause()
//     resim.src="./helpers/call.jpg"
// })

// kapat.addEventListener("click",()=>{
//     ses1.pause()
//     ses2.pause()
//     resim.src="./helpers/images.jpg"
// })


//! Input örnegi

let alan =document.getElementById("username")
let buton3=document.getElementById("login")
let user=document.getElementById("displayUsername")

alan.addEventListener("input", ()=>{
    let username=alan.value
    user.textContent=`Girdiginiz kullanici adi: ${username}`
})

let usr='Mark'

buton3.addEventListener("click", ()=>{

    let username=alan.value

    if(username==usr){
         user.textContent=`Girdiginiz kullanici adi: ${username}`;
         alan.value=''
    }else{
        user.textContent=`Girdiginiz kullanici adi yanlis lütfen tekrar deneyin`
    }
   
    
})

const numbers=document.querySelectorAll(".number") //Array benzeri Nodelist döndürür

// console.log(numbers)

numbers.forEach((number,index)=>{

    number.addEventListener("click", ()=>{

        if(number.textContent=="X"){
            number.textContent=index+1
        }else{
            number.textContent="X"
        }
    })
})

