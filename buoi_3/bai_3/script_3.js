function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        // Chuyển hướng sang trang quản trị
        window.location.href = "admin.html";
    } else {
        // Hiển thị thông báo lỗi
        document.getElementById("error-msg").innerText = "Tài khoản hoặc mật khẩu không chính xác";
    }
}
