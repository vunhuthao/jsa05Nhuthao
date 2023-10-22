document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Kiểm tra thông tin đăng nhập (ở đây sẽ set cứng)
    if (username === 'nguoidung' && password === 'matkhau') {
        // Lưu thông tin đăng nhập vào local storage
        localStorage.setItem('username', username);
        // Chuyển hướng sau khi đăng nhập thành công
        window.location.href ='c3.html';
    } else {
        alert('Sai tên người dùng hoặc mật khẩu. Vui lòng thử lại.');
    }
});
