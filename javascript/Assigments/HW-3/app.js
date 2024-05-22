//? Write a Js function that generates a string id (specified length) of randomcharacters.
// charlist="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//Example : input=4 => output="A8Sf"
//Example : input=8 => output="29SaBfgu"

const idMaschine=function (n){

let charlist="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let id=""

let rastgele;

for(i=1 ; i<=n ; i++){
    rastgele=Math.floor(Math.random()*charlist.length);
    id=id+charlist[rastgele]
    
}

return id;

}

console.log(idMaschine(53))
console.log(idMaschine(5))

//?Write a function to find the area and perimeter of a circle.

const calculateAreaPerimeter=(r)=> {
    let area=Math.PI*r*r
    let peri=2*Math.PI*r

    return `Alan= ${area} ve Cevre=${peri}`
}

console.log(calculateAreaPerimeter(3));

//? Write a function to find the count of a specific letter in a string

const wieViel=function(kelime,harf){
    let yeniKelime=kelime.toLowerCase()
    let counter=0

    for(i=0 ; i<=kelime.length ; i++){
        if(yeniKelime[i]==harf){
            counter++
        }
        
    }
 console.log(`${kelime}`,counter)
}

wieViel("melek","e");
wieViel("ugurlu","u");

//? write a function to extract a specified number of characters from a string

const extractFunction=function(word, num, toNum){
    let newString=""
    for(i=0 ; i<=word.length ; i++){
        if(i<num || i>toNum){
            continue;
        }else{
            newString+=word[i]

        }
    }
    return newString

}

console.log(extractFunction("Clarusway",2,6))

