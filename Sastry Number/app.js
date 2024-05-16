let n1 = +prompt(
  "Sastry sayisi olup olmadigini bilmek istediginiz bir sayi giriniz"
);

let n2 = n1 + 1;

let check = n1.toString() + n2.toString();

console.log(check);

let sqrRoot = check ** (1 / 2);

if (parseInt(sqrRoot) === sqrRoot) {
  console.log(n1, " a Sastry number");
} else {
  console.log(n1, "not a Sastry number.");
}
