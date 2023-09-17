document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'thaonhu' && password === '123457') {
        localStorage.setItem('username', username);
     
        window.location.href ='show.html';
    } else {
        alert('Sai tên người dùng hoặc mật khẩu. Vui lòng thử lại.');
    }
});
