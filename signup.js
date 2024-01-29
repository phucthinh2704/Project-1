const eye = document.getElementById("eye");
eye.addEventListener("click", (e) => {
  e.preventDefault();

  if (password.type === "password") {
    password.type = "text";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    eye.classList.add("fa-eye");
    eye.classList.remove("fa-eye-slash");
  }
});

const signup = document.getElementById("signup");
$('#er-mail').hide(100)
$('#er-pass').hide(100)
$('#er-confirm').hide(100)
signup.addEventListener("click", (e) => {
  e.preventDefault()

  const password = document.getElementById("password");
  const confirm_password = document.getElementById("confirm_password");
  const mail = document.getElementById("mail");
    if(mail.value == ''){
        $('#er-mail').show(100)
        return
    }
    else {
        $('#er-mail').hide(100)
    }

    if(password.value == ''){
        $('#er-pass').show(100)
        // return
    } else {
        $('#er-pass').hide(100)
    }

    if(password.value != confirm_password.value ){
        if(!confirm_password.value) {
            $('#er-confirm').text('Bạn chưa nhập lại mật khẩu').show(100)
        }
        else {
            $('#er-confirm').text('Mật khẩu nhập lại không đúng').show(100)
        }
    }
    else {
        $('#er-confirm').text('Mật khẩu nhập lại không đúng').hide(100)
    }
    
    if(mail.value && password.value != '' && password.value == confirm_password.value){
        const user = {
            email: mail.value,
            password: password.value
        }
        var jsonString = JSON.stringify(user)
        localStorage.setItem(mail.value, jsonString)
        alert("Đăng ký tài khoản thành công")
    }
});
