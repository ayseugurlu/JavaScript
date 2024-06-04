const title = document.getElementsByTagName("h1");
title[0].style.color = "red";
title[0].style.textAlign = "center";


const resim = document.getElementsByTagName("img");

resim[0].onmouseover = () => {
  resim[0].style.objectFit = "cover";
  resim[0].src = "./image/aslan1.jpeg";
};

resim[0].onmouseleave = () => {

  resim[0].src = "./image/aslan2.jpeg";
  sound.play();

setTimeout(()=>{
    sound.pause()
    sound.currentTime=0
}, 5000)
};

const buton = document.getElementById("buton");
buton.style.textAlign = "center";

const btn = document.getElementsByClassName("btn");
for (i=0 ; i<btn.length ; i++){
  btn[i].style.padding = "10px 30px";
  btn[i].style.borderRadius="5px"
  btn[i].style.margin = "30px 1px";
  btn[i].style.fontSize = "1rem";
  if (btn[i] == btn[0]) {
    btn[i].style.color = "orange";
    btn[i].style.border = "orange solid 1px";
  } else if (btn[i] == btn[1]) {
    btn[i].style.color = "aqua";
    btn[i].style.border = "aqua solid 1px";
  } else if (btn[i] == btn[2]) {
    btn[i].style.color = "red";
    btn[i].style.border = "red solid 1px";
  }
}

const ara=document.getElementById("ara")


ara.onclick=()=>{
    resim[0].src="image/img.gif"
    sound2.play()
    console.log("click")

}

const baglat=document.getElementById("baglat")


baglat.onclick=()=>{
    
    resim[0].src="image/telbagla.gif"
    
    sound2.pause()
    

}
const konus=document.getElementById("konus")


konus.onclick=()=>{
    resim[0].src="image/telefon.gif"
    sound2.pause()
    

}

konus.ondblclick=()=>{
    resim[0].src="image/telfirlat.gif"
    sound2.pause()
    

}


