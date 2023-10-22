document.getElementById('nameForm').addEventListener('submit', function(event){
    var name = document.getElementById('nAme').value;
    localStorage.setItem('TêN',name);  
})

document.addEventListener('DOMContentLoaded', function() {
    var username = localStorage.getItem('TêN');
    var usernameDisplay = document.getElementById('usernameDisplay');

        usernameDisplay.textContent = username;
    
});

