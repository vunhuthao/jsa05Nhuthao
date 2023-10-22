document.getElementById('info').addEventListener('submit', function(event){
    var name = document.getElementById('name').value;
    localStorage.setItem('Tên',name);  
    alert("Đã mua");
})
console.log("đjdk")