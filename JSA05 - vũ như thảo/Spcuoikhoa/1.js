//trang gior hàng chi tiết
//var pri = 1;
let x = 1;
//var tyt = document.getElementById("sol").value;


function bPlus(){
    x = x + 1;
    document.getElementById("sol").value = x;
    document.getElementById("p5").innerHTML= x;
    //sl = x;
    //alert (tyt)
    document.getElementById("sol").value = x;


}
function bMinus(){
    x = x - 1;
    //sl = x;
    document.getElementById("p5").innerHTML= x;
    document.getElementById("sol").value = x;

}
//var yy = document.getElementById("pr").value;

/*function bAdd(){
    let x = document.getElementById("name").innerHTML;
    let y = document.getElementById("price").innerHTML;
    let z = document.getElementById("p5").innerHTML;
    let t = 81000*z;
    localStorage.setItem('nameB',x);
    alert("Đã thêm " + x + "vào giỏ hàng " + "Thành tiền: " + t + "đ");
}*/

//hiển thị chung
//var giohang = [];
function bAdd(){
    var layimg = document.getElementById("img1");
    var bname = document.getElementById("name").innerHTML;
    var bprice = document.getElementById("pr").value;
    var sl = document.getElementById("sol").value;
    /*var kttrung = 0;
    for (let i=0; i< giohang.length; i++){
        if (giohang[i]["name"] == name){
            giohang[i]["sl"] += sl;
            kttrung 
         }
    }*/
    //console.log(bprice);
    //console.log(sl);
    //console.log(sl)
    //var iimg = layimg.src;
    //alert( sl);
    var proB = {
        "name": bname,
        "img": layimg,
        "price": bprice,
        "sl": sl,
    }
    giohang.push(proB);
    console.log(giohang);
    localStorage.setItem("cart", JSON.stringify(giohang));
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart != null){
        document.getElementById("slsp").innerHTML = cart.length;
    }
}
var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart != null){
        document.getElementById("slsp").innerHTML = cart.length;
    }
var cart = JSON.parse(localStorage.getItem("cart"));

if (cart != null){
    giohang = cart;

} else {
    var giohang = [];
}

function loadslsp(){
    var cart = JSON.parse(localStorage.getItem("cart"));
if (cart != null){
    document.getElementById("slsp").innerHTML = cart.length;
}
}
function loaddatacart(){
    loadslsp();
    showcart();
    total();
 }

function showcart(){
    var cart= JSON.parse(localStorage.getItem("cart"));
    if (cart != null){
        var kq = ""

        for (let i = 0; i< cart.length;i++){
            var tt=parseInt(cart[i]["price"] * cart[i]["sl"]);
            let y = i+1;
            kq += `<tr>
            <td>`+y+`.      `+ cart[i]["name"] +`</td>
            <td> `+cart[i]["price"]+`,000</td>
            <td>` + cart[i]["sl"]+`</td>
            <td>`+tt+`,000</td>
            <td onclick="hs(`+i+`)">Xoá</td>
          </tr>`
          //alert(tt);
          
        }
        document.getElementById("thongtingiohang").innerHTML = kq;
        console.log(cart);
    }
}
function hs(i){
   //giohang[i].remove;
   alert(i);
}
function buB(){
    var cart= JSON.parse(localStorage.getItem("cart"));
    if (cart== null){
        alert("Giỏ hàng rỗng");

    } else {
        window.location="done.html"
        localStorage.removeItem("cart");
    }
}

function total(){
    var cart= JSON.parse(localStorage.getItem("cart"));
    if (cart != null){
        var total = 0;
        for (let i = 0; i< cart.length;i++){
            var tt=parseInt(cart[i]["price"] * cart[i]["sl"]);
            total += tt;
        }
        document.getElementById("tongdonhang").innerHTML = "Tổng đơn hàng: " + total + ",000 đ";
    }
}
//<td>`+ tt +`</td>
//trang product

function loadcart(){

}
function delcart(){
    localStorage.removeItem("cart");
    window.location = "show.html";
}


function add2(){
    let h = document.getElementById("2").innerHTML;
    localStorage.setItem('nameB1',h);
}
/*for (let i = 0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){
        //alert("nút số: " + i)
        var hinh = btn[i].parentElement.childNodes[0];
        alert(hinh);
    });
}*/





