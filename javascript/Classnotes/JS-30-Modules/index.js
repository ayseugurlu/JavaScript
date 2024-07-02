console.log("index.js den selam")

// import {topla, calismaSaati,increase, decrease, myName} from "./myModules.js"


// import ugurla from "./myModules.js"

// import ugurla, {topla, calismaSaati,increase, decrease, myName} from "./myModules.js"

//?named import ederken "as" ile isim degistirerek import yapabiliriz

//?default export larda istedigimiz isimle direk import edebiliriz


import by, {topla, calismaSaati,increase as inc, decrease as dec, myName} from "./myModules.js"


console.log(topla(2,6))

console.log(calismaSaati)

// console.log(decrease(2))
// console.log(increase(2))
console.log(myName)

// ugurla()


console.log(inc(2))
console.log(dec(2))
by()
