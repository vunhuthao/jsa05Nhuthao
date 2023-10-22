document.getElementById('nameForm').addEventListener('submit',function(){
    var pass = document.getElementById('pass').value;
    var username = document.getElementById('uName').value;
if ( username == 'Thảo' && pass =='pass'){
    alert("đăng nhập thành công");
} else {
    if ( username == 'Lisa' && pass =='pass'){
        alert("dô xong") 
    } else {
        alert("no")
    }
}
})
