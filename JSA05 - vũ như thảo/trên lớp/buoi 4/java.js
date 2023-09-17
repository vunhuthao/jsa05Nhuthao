document.getElementById('login').addEventListener('submit',function(){
    var pass = document.getElementById('pass').value;
var username = document.getElementById('name').value;
if ( username == 'Thảo' && pass =='pass'){
    localStorage.setItem('name', username)
    var greetingElement = document.createElement('p');
    greetingElement.textContent = 'Welcome' + username + '!';
    document.body.appendChild(greetingElement);
} else {
    alert("tên hoặc mật khẩu sai, vui lòng thử lại");
}
})

