document.addEventListener('DOMContentLoaded', function() {
    var username = localStorage.getItem('username');
    var usernameDisplay = document.getElementById('usernameDisplay');
    if (username) {
        usernameDisplay.textContent = username;
    } else {
        usernameDisplay.textContent = 'Không tìm thấy tên người dùng.';
    }
});
