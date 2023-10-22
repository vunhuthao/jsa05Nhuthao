document.addEventListener('DOMContentLoaded', function() {
    var username = localStorage.getItem('Tên');
    var usernameDisplay = document.getElementById('usernameDisplay');

        usernameDisplay.textContent = username;
    
});
