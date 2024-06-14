//^ Selectors

const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")
const temizleBtn =document.getElementById("temizle-btn")

//^ Hesap Tablosu
const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")

//^ variables
let gelirler = 0
let harcamaListesi = []


//^ Harcama Formu
const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const harcamaInput = document.getElementById("miktar")

//^ Harcama Tablosu

const harcamaBody = document.getElementById('harcama-body')


//^ Ekle Formu -gelirin eklenmesi

ekleFormu.addEventListener("submit", (e)=>{
    e.preventDefault() //submitten gelen reload u önler
    gelirler = gelirler + Number(gelirInput.value)
    // console.log(gelirler)
    // gelirInput.value = ''
    ekleFormu.reset()
    localStorage.setItem("gelirler", gelirler)
    gelirinizTd.textContent = new Intl.NumberFormat().format(gelirler) 
    hesapla() 

})

window.addEventListener("load",()=>{
    gelirler = Number(localStorage.getItem("gelirler")) || 0 
    tarihInput.valueAsDate = new Date()
    harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || []
    harcamaListesi.forEach((harcama)=>harcamaYaz(harcama))
    hesapla()
})

//^ harcamanin girilmesi

harcamaFormu.addEventListener("submit", (e)=>{
    e.preventDefault() //reload u önler
    const yeniHarcama = { //girilen degerler ile bir harcama objesi olusturduk
        id: new Date().getTime(), //! sistem saatini milisaniye olarak verir.Bunun da id olarak kullanilmasini istedik
        tarih:new Date(tarihInput.value).toLocaleDateString(),
        miktar: harcamaInput.value,
        alan: harcamaAlaniInput.value

    }
    
    harcamaListesi.push(yeniHarcama) //her yeni harcamayi listeye ekliyoruz
    console.log(harcamaListesi)
    harcamaFormu.reset() //formdaki alanlari siliyoruz
    tarihInput.valueAsDate = new Date() //sayfa acildiginda günün tarihini html e yazar
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))

    harcamaYaz(yeniHarcama)
    hesapla()
})


//^ Harcamayi dom a yaz
harcamaYaz = ({id, tarih, miktar, alan}) => {
    // const  {id, tarih, miktar, alan}=yeniHarcama //data destruction

    // harcamaBody.innerHTML += `
    //          <tr>
    //         <td>${tarih}</td>
    //         <td>${alan}</td>
    //         <td>${miktar}</td>
    //         <td><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>
    //       </tr>
    // `

    const tr = document.createElement("tr")  //tr elementi olustrur

    //tr nin icindeki td elementlerini olusturur
    const appendTd = (content) => {
        const td =document.createElement("td")
        td.textContent = content
        return td
    }

    //cöp kutuusnun icerigini olusturur

    const createLastTd = () => {
        const td =document.createElement("td")
        const i = document.createElement("i")
        i.id= id
        i.className = "fa-solid fa-trash-can text-danger"
        i.type = "button"
        td.appendChild(i)
        return td
    }

//olusturulan 4 td yi tr ye ekler
    tr.append(
    appendTd(tarih),
    appendTd(alan),
    appendTd(miktar),
    createLastTd()
)

// harcamaBody.append(tr) //sona ekler
harcamaBody.prepend(tr) //üste ekler


}


//^ dom daki gelir gider hesaplarini yapar ve sonuclarini yazdirir

const hesapla = () => {

    const giderler = harcamaListesi.reduce((toplam, harcama) => toplam + Number(harcama.miktar), 0)

    // console.log(giderler)
    giderinizTd.textContent = new Intl.NumberFormat().format(giderler) //1000 ayraclari ve decimal isareti icin kullanicinin bölgesel ayarlarini kullanir
    gelirinizTd.textContent = new Intl.NumberFormat().format(gelirler)
    kalanTd.textContent = new Intl.NumberFormat().format(gelirler - giderler)

    const borclu = gelirler - giderler < 0
    console.log(borclu)
    
    kalanTd.classList.toggle('text-danger', borclu) //icindeki deger true oldugunda istenen durumu yapar toggle.
    document.getElementById('kalanTh').classList.toggle('text-danger', borclu)
    
}

//^ cöp ikonuna tiklaninca ilgili satiri siler ve diger gerekli islemleri yapar

harcamaBody.addEventListener('click', (e)=>{
    
    if(e.target.classList.contains('fa-trash-can')){
        e.target.parentElement.parentElement.remove() //Dom dan ilgili satiri siler

        const id = e.target.id //satirin id sini alir

        //ilgili satiti harcama listesinden kaldirdik
        harcamaListesi = harcamaListesi.filter((harcama)=> harcama.id != id)

        //yeni olusan harcamaListesi ni localStorage a güncellemek
        localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))

        hesapla()


    }


})

//^ Bilgileri temizle butonu fonksiyonu

temizleBtn.addEventListener("click", ()=>{

    if(confirm("Tüm bilgileri silmek istedginizden emin misiniz?")){
        harcamaListesi = [] //Harcama listesini bosaltir
        gelirler = 0 //gelirler degiskineni 0 lar
        harcamaBody.innerHTML = "" //Dom daki veriyi siler
        localStorage.clear() //! Localstorage i her seyi siler
        localStorage.removeItem("gelirler") //localstorage ten gelirleri siler
        localStorage.removeItem("harcamalar") //localstorage ten harcamalar siler
        hesapla() //hersey silindikten sonra Dom daki hesaplamayi yapmnak icinb

    }
})

