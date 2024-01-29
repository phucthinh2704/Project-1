const eye = document.getElementById('eye')
const password = document.getElementById('password')
const email = document.getElementById('mail')
const login = document.getElementById('login')
eye.addEventListener('click', (e) => {
    e.preventDefault()

    if(password.type === 'password'){
        password.type = 'text'
        eye.classList.remove('fa-eye')
        eye.classList.add('fa-eye-slash')
    }else{
        password.type = 'password'
        eye.classList.add('fa-eye')
        eye.classList.remove('fa-eye-slash')
    }
})
$('#er-mail').hide(100)
$('#er-pass').hide(100)
login.addEventListener('click', (e) => {
    e.preventDefault()
    
    var password = document.getElementById('password')
    var email = document.getElementById('mail') 
    
    if(email.value == ''){
        $('#er-mail').show(100)
    }
    else {
        $('#er-mail').hide(100)
    }
    
    if(password.value == ''){
        $('#er-pass').show(100)
        return
    }
    else {
        $('#er-pass').hide(100)
        if(email.value == ''){
            $('er-pass').show(100)
            return
        }
    }

    var data = localStorage.getItem(email.value)
    var user = JSON.parse(data)
    if(user && user.email == email.value && user.password == password.value){
        alert('Đăng nhập thành công')
        window.location.href = 'https://youtube.com/'
    }
    else {
        alert('Đăng nhập thất bại')
    }
})
