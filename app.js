const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id:1,
        title: "Libre Eau De Parfum",
        price:165,
        img:"img/l1.webp"
    },
    {
        id:2,
        title:"Tom Ford Black Orchid ",
        price:139,
        img:"img/tomford.avif"
    },
    {
        id:3,
        title:"YSL Black Opium",
        price:149,
        img:"img/b02.png"
    },
    {
        id:4,
        title:"Valentino Born In Roma",
        price:119,
        img:"img/roma.webp"
    },
]

let choosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice =  document.querySelector(".productPrice")


menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //second slider

        choosenProduct = products[index]

        //text change for current product
        currentProductTitle.textContent =  choosenProduct.title
        currentProductPrice.textContent = "$"+choosenProduct.price

        //change img

        currentProductImg.src = choosenProduct.img

    })
})

const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click",()=>{
    payment.style.display = "flex"
})
close.addEventListener("click",()=>{
    payment.style.display = "none"
})

