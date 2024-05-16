let a=+prompt("Lütfen bir sayi giriniz?");

let sum=0;

let t=a.toString().length;

console.log(t);


for( i=0 ; i< t ; i++){
    
    placeValue=parseInt(a/ (10**i)) % 10;

    sum = sum + (placeValue)**t;
}

if( sum == a){
    console.log("This is an Armstrong Number.");
}else{
    console.log("This is not an Armstrong Number.");
}