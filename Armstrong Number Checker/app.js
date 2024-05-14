let a=+prompt("Lütfen bir sayi giriniz?");

let sum=0;

bir = a % 10;
on = (a / 10) % 10;
yüz = (a / 100) % 10;

let t=a.toString().length;

console.log(t);


for( i=0 ; i< a.toString().length; i++){
    
    placeValue=parseInt(a/ (10**i)) % 10;

    sum = sum + (placeValue)**3;
}

if( sum == a){
    console.log("This is an Armstrong Number.");
}else{
    console.log("This is not an Armstrong Number.");
}