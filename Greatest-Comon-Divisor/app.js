let a = +prompt("bir sayi giriniz");
let b = +prompt("bir sayi giriniz");
a = a < 0 ? -a : a;
b = b < 0 ? -b : b;
let i = 1;
let gcd = 1;
if (a <= b) {
  for (i = 1; i <= a; i++) {
    if (a % i == 0 && b % i == 0) {
      gcd = i;
    }
  }
} else {
  for (i = 1; i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
      gcd = i;
    }
  }
}
console.log(gcd);