// const slide = document.getElementById('slide');

// let counter = 0;

//  let showslide =setInterval (function(){
//     counter+=300;
//     if (counter >= 1210){
//         counter = 0 
//     }
//     slide.style.transform = `translateX(-${counter}px)`
// },1000)

// slide.addEventListener("mouseenter",stop)
// function stop(){
//     console.log("masu geldi");
//     clearInterval(showslide)
// }
// slide.addEventListener('mouseleave', goOn)
// function goOn (){
//     console.log("maus cixdi");
//     let yeniInterval = setInterval (function(){
//         counter+=300;
//         if (counter >= 1210){
//             counter = 0 
//         }
//         slide.style.transform = `translateX(-${counter}px)`
//     },1000)

// slide.addEventListener("mouseenter",function(){clearInterval(yeniInterval)})

// }




const data = [
    {
        id: 1,
        faizsiz: "Faizsiz",
        foto: "img/Hoffman.webp",
        fotoname: "Televizor HOFFMANN LED 32F3700",
        firstprice: "349.99",
        endprice: "249.99",
    },
    {
        id: 2,
        faizsiz: "Faizsiz",
        foto: "img/Iphone11.webp",
        fotoname: "İphone 11 64 GB White",
        firstprice: "1399.99",
        endprice: "1199.99",
    },
    {
        id: 3,
        faizsiz: "Faizsiz",
        foto: "img/Samsung Galaxy .webp",
        fotoname: "Samsung Galaxy A33 DS(SM-A336)",
        firstprice: "679.99",
        endprice: "279.99",
    },
    {
        id: 4,
        faizsiz: "Faizsiz",
        foto: "img/Iphone13.webp",
        fotoname: "Iphone 13 128 GB Blue",
        firstprice: "1879.99",
        endprice: "1649.99",
    },
    {
        id: 5,
        faizsiz: "Faizsiz",
        foto: "img/GalaxyA13.webp",
        fotoname: "Samsung Galaxy A13 Blue",
        firstprice: " 2159.99",
        endprice: "1899.99",
    },
    {
        id: 6,
        faizsiz: "Faizsiz",
        foto: "img/GalaxyA13b.webp",
        fotoname: "Samsung GalaxyA13 Black",
        firstprice: "1999.99",
        endprice: "1799.99",
    },


]
let container = "";

for (i = 0; i < data.length; i++) {
    container += `
    <div class="col">
            <div class="up">
                <div class="title">
                    <p>${data[i].faizsiz}</p>
                </div>
                <div class="foto">
                    <img src="${data[i].foto}" >
                    <h3>${data[i].fotoname}</h3>
                </div>
            </div>
            <div class="down">
                <div class="price">
                    <div class="saleout">
                        <h3 class="first">${data[i].firstprice}</h3>
                        <h3 class="end">${data[i].endprice}</h3>
                    </div>
                    <div>
                        <button data-id="${data[i].id}" class="Sebeteat">Səbətə at </button>
                    </div>
                </div>
            </div>
     </div>
    `
}
document.querySelector('.row').innerHTML = container

var modalBtn = document.getElementById('modalBtn')



const closeBtn = document.getElementById("closeBtn")
const modalBox = document.querySelector(".hiddenmodal")
const sebet = document.getElementById("item");
closeBtn.addEventListener("click", function () {
    modalBox.classList.remove("show")
})

let sebeteAt = document.querySelectorAll(".Sebeteat");
sebeteAt.forEach(function (e) {
    e.addEventListener("click", function () {
        var mehsulId = e.getAttribute("data-id");
        var mehsulQiymeti = Number(e.parentElement.previousElementSibling.children[1].textContent);
        var mehsulSekli = e.parentElement.parentElement.parentElement.previousElementSibling.children[1].children[0].getAttribute("src");
        var mehsulAdi = e.parentElement.parentElement.parentElement.previousElementSibling.children[1].children[1].textContent;

        modalBox.classList.add("show");

        var output = `<div product-id="${mehsulId}" class="left">
                        <div><img src="${mehsulSekli}"></div>
                        <div class="right">
                            <p>${mehsulAdi}</p>
                            <button>${1}</button>
                            <button>${mehsulQiymeti}</button>
                        </div>
                        <div class="subtotal">Umumi qiymet<span>${1 * mehsulQiymeti}</span></div>
                    </div>`
                    sebet.innerHTML += output

    })

})

