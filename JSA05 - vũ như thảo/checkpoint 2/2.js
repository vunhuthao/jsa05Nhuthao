document.addEventListener('DOMContentLoaded', function() {
    var username = localStorage.getItem('TêN');
    var usernameDisplay = document.getElementById('usernameDisplay');
   usernameDisplay.textContent = username;
    
});

document.getElementById('nameForm').addEventListener('button', function(event){
    console.log("n"); 
})

let button = document.getElementById("dele");
button.addEventListener("click", function(){
    localStorage.removeItem('TêN')
});

let sumit = document.getElementById("sub");
sumit.addEventListener("click",function(){
    var name = document.getElementById('nAme').value;
    localStorage.setItem('TêN',name);   
})