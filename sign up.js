// Truy xuất các phần tử từ DOM
const registerForm = document.getElementById('registerForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const phoneInput = document.getElementById('phone');

// Tham chiếu đến các phần tử hiển thị lỗi
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const phoneError = document.getElementById("phoneError");

// Thêm sự kiện submit vào form
registerForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Ngăn form submit mặc định

    // Lấy giá trị từ các ô input
    const usernameValue = usernameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    const phoneValue = phoneInput.value.trim();

    // Xóa thông báo lỗi cũ
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    phoneError.textContent = "";

    let isValid = true;

    // Kiểm tra các điều kiện nhập liệu
    if (usernameValue.length < 3) {
        usernameError.textContent = "Tên đăng ký phải có ít nhất 3 ký tự.";
        isValid = false;
    }

    if (!emailValue || !emailValue.includes("@")) {
        emailError.textContent = "Email không hợp lệ.";
        isValid = false;
    }

    if (passwordValue.length < 6) {
        passwordError.textContent = "Mật khẩu phải có ít nhất 6 ký tự.";
        isValid = false;
    }

    if (passwordValue !== confirmPasswordValue) {
        confirmPasswordError.textContent = "Mật khẩu và xác nhận mật khẩu không khớp.";
        isValid = false;
    }

    if (phoneValue.length < 10) {
        phoneError.textContent = "Số điện thoại phải có ít nhất 10 chữ số.";
        isValid = false;
    }

    // Nếu tất cả thông tin hợp lệ, thực hiện đăng ký
    if (isValid) {
        // Tạo đối tượng lưu trữ thông tin người dùng
        const user = {
            username: usernameValue,
            email: emailValue,
            password: passwordValue,
            phone: phoneValue,
        };

        // Lưu thông tin người dùng vào localStorage dưới key 'user'
        localStorage.setItem("user", JSON.stringify(user));

        // Thông báo đăng ký thành công và chuyển đến trang đăng nhập
        alert("Đăng ký thành công!");
        window.location.href = "./Sign In.html"; // Chuyển đến trang đăng nhập
    }
});