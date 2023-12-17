function dangKy(){
    let tk = document.getElementById("taikhoan").value;
    let mk = document.getElementById("matkhau").value;
    let re = document.getElementById("repass").value;

    let check = false;
    if (!localStorage.getItem(tk))
        check=true;
    if (!check){
        alert("Tài khoản đã tồn tại");
    }
    else{
        if (mk.length < 6 )
            alert("Mật khẩu ít nhất 6 ký tự");
        else if (mk !== re)
            alert("Mật khẩu không khớp");
        else{
            let user = { "name": tk, "pass": mk};
            localStorage.setItem(tk, JSON.stringify(user));
            alert("Đăng ký thành công");
            window.location.href = "index.html";
        }
    }
}

function dangNhap(){
    let tk = document.getElementById("taikhoan").value;
    let mk = document.getElementById("matkhau").value;
    let root = JSON.parse(localStorage.getItem(tk));
    
    if (tk === root.name && mk === root.pass){
        alert("Đăng nhập thành công");
        window.location.href = "neon_heart.html";
    }
    else 
        alert("Vui lòng kiểm tra lại thông tin");
}