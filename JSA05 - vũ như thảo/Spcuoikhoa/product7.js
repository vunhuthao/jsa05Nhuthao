let products = {
    data: [
        {
            bName: "Totto chan bên cửa sổ",
            price: "78.500 đ",
            image: "https://upload.wikimedia.org/wikipedia/vi/f/fb/Totto-chan_b%C3%AAn_c%E1%BB%ADa_s%E1%BB%95_%28s%C3%A1ch%29.jpg"
        },

        {
            bName: "Mắt biếc",
            price: "77.000 đ",
            image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1691147319i/11273677.jpg"
        },
       // {
       //     bName: "Cho tôi xin một vé đi tuổi thơ",
       //     price: "81.000 đ",
       //     image: "https://cdn0.fahasa.com/media/catalog/product/8/9/8934974187639.jpg"
       // },
        {
            bName: "Cho tôi xin một vé đi tuổi thơ",
            price: "81.000 đ",
            image: "https://cdn0.fahasa.com/media/catalog/product/8/9/8934974187639.jpg"
        },
        {
            bName: "",
            price: "",
            image: ""
        },
        {
            bName: "",
            price: "",
            image: ""
        },

    ]
}
for (let i of products.data){

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", i.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h4");
    name.classList.add("book-name");
    name.innerText = i.bName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h3");
    price.innerText = "Giá: " + i.price;
    container.appendChild(price);



    let bTab = document.createElement("button");
    bTab.innerText='xem thêm';
      container.appendChild(bTab);
    var btn = document.getElementsByTagName("button");

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

var btn = document.getElementsByTagName("button");
var link=["product.html","login.html","main.html","(1)Cho tôi xin một vé đi tuổi thơ.html"];

btn[0].addEventListener("click", function(){
    let searchInput = document.getElementById("search-input").value.toUpperCase()
        let cards = document.querySelectorAll(".card")
        let productsName = document.querySelectorAll(".book-name")
        let prices = document.querySelectorAll('h4')
    
        productsName.forEach((items, index) => {
            if (items.innerText.includes(searchInput)){
                cards[index].classList.remove("hide")
            }else{
                cards[index].classList.add("hide")
            }
        })
})
for (let i = 1; i<btn.length; i++){
    btn[i].addEventListener("click", function(){
        //alert("nút số: " + i);
        window.location= link[i];

    });
}


var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart != null){
        document.getElementById("slsp").innerHTML = cart.length;
    }

//btn[0].addEventListener("click", addtocat);
