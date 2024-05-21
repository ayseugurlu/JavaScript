// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 5- SCOPE *************");


//!global scope (gökteki yildizlar gibi)

let first=5
let second=12
let third=456

console.log(first,second,third);

const scopeFunction =() => {

    first=8

    //let sayesinde yeni bir degisken olusturuldu ve disardan etkilenmez.
    let second=1234 //!funtion scope
    console.log(second)

    let fourth=second + first

    return fourth
}

console.log(scopeFunction());//1242

console.log(first);//8
console.log(second);//12
//console.log(fourth); //süslü icinde kladi

//!global degisken

let number=11;

const fonk=() =>{

    let number=44 //!function scope
    number++
    // console.log(number)

    return number
}

console.log(fonk());//45

console.log(number);//11

//zorlamayla icerdeki number i fonk retuzrn ü sayesinde , globalde number degiskenine assign ettik

number= fonk()// global scope teki number i function scope taki number a esit hale getirdik

console.log(number);

//*********************** */


//const number=7 //! Identifier 'number' has already been declared.

//if ya da for gibi süslüler icin block scope

{
    number++

    let x=5
    let y=x+15
    console.log(y); //! block scope
}

// console.log(y);
console.log(number)

//?VAR

number2=100;

var number2; //hoisted (number2 ye sonradan tip atadim ve hep var gibi oldu)

var result ="Hallo";

if(number2==1009){
    let result="Hi!";//!block scope
    console.log(result);


}else{
    result="salut" //!global scope
    console.log(result);
}

console.log(result)

















