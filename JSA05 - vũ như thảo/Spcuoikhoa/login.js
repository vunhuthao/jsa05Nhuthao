document.getElementById('nameForm').addEventListener('submit',function(){
    var pass = document.getElementById('pass').value;
    var username = document.getElementById('uName').value;
    if (username == null ){
        alert("vui lòng điền thông tin")
    } else {
if ( username == 'Thảo' && pass =='pass'){
    alert("Chào Thảo!");
} else {
    if ( username == 'Linh' && pass =='pass'){
        alert("Chào Linh") 
    } else {
        alert("Sai mật khẩu hoặc password, vui lòng thử lại")
    }
}
}})

var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart != null){
        document.getElementById("slsp").innerHTML = cart.length;
    }