//Fibonacci dizisi, her bir sayının kendisinden önce gelen iki sayının toplamı olduğu bir sayı dizisidir. Genellikle "0, 1, 1, 2, 3, 5, 8, 13, 21, ..." gibi bir şekilde başlar. 

let i=0;

let n=[0 ,1];

let a=+prompt("Welche Fibonacci-Zahl möchten Sie wissen?");


for(i=0 ; i<=a; i++ ){
    
   n[i+2]= n[i] + n[i+1];

   console.log(n[i]);

}