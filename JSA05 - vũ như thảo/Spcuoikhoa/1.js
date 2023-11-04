let x = 1;
function bPlus(){
    x = x + 1;
    document.getElementById("p5").innerHTML= x;
}
function bMinus(){
    x = x - 1;
    document.getElementById("p5").innerHTML= x;
}
/*function bAdd(){
    let x = document.getElementById("name").innerHTML;
    let y = document.getElementById("price").innerHTML;
    let z = document.getElementById("p5").innerHTML;
    let t = 81000*z;
    localStorage.setItem('nameB',x);
    alert("Đã thêm " + x + "vào giỏ hàng " + "Thành tiền: " + t + "đ");
}*/
var giohang = [];
function bAdd(){
    var layimg = document.getElementById("img1");
    var bname = document.getElementById("name").innerHTML;
    var bprice = document.getElementById("price").innerHTML;
    var sl = document.getElementById("p5").innerHTML;
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
}
function loaddatacart(){
   showcart();
}
function showcart(){
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart != null){
        var kq= "";
        for (let i = 0; i<cart.length; i++){
            var tt= parseInt(cart[i]["price"] * cart[i]["sl"]);
            kq +=`   <tr>
            <td>`+ cart[i]["name"] +`</td>
            <td>`+ cart[i]["price"] +` </td>
            <td>`+ tt+ `</td>
            <td>xoá</td>
        </tr>`
        }
        document.getElementById("thongtingiohang").innerHTML = kq;
        console.log(kq);
        alert("s")
    }
    alert(cart)
    
}
/*function delcart(){
    localStorage.removeItem("cart");
}*/

//document.getElementById("show").innerHTML = localStorage.getItem('nameB');
function add2(){
    let h = document.getElementById("2").innerHTML;
    localStorage.setItem('nameB1',h);
}

//localStorage.setItem('nameB1-1','Tôtt');
var btn = document.getElementsByTagName("button");

/*for (let i = 0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){
        //alert("nút số: " + i)
        var hinh = btn[i].parentElement.childNodes[0];
        alert(hinh);
    });
}*/





