 //? 1-Fiyatlar dizisinde her bir fiyata % 10 zam yapalim. Not forEach kullanilmali ve orijinal dizi degistirilmeli

 const fiyatlar=[100,250,50,89]

 const zamliFiyatlar=fiyatlar.map((a)=> a=a*1.1)
 zamliFiyatlar.forEach((a)=>console.log(a))


 console.log("---------------------")
 //? 2- Fiyatlar dizisindeki fiyati 90 dan büyük olan degerleri konsolo tek tek bastiriniz.

 fiyatlar.filter((a)=>a>90).forEach((a)=>console.log(a))


 console.log("-------------------------")
 //? 3-Fiyatlar dizisindeki fiyati 110 dan kücük olan degerlere %10 artis yapin ve bu degerleri konsolda tek tek bastirin

 fiyatlar.filter((a)=>a< 110).map((a)=> (a*1.1).toFixed(0)).forEach((a)=> console.log(a))


 //? 4- Maaslar dizisinde 4000den dusuk olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

 const maaslar=[3000,5000,4000,6000,6500]

 const zamliMaaslar=maaslar.filter((a)=> a<4000).map((a)=> a*1.5)

 console.log(zamliMaaslar)

 //? 5-Maasi 4000 den büyük olanlara %25 zam yaparak sonuclari konsolda yazdiralim.

 maaslar.filter((a)=>a>=4000).map((a)=> a*1.25).forEach((a)=>console.log(a))