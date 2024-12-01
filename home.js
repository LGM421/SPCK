// Hàm xử lý khi người dùng chọn số lượng vé
function buyTicket(quantityId, price, movieName) {
    const quantityElement = document.getElementById(quantityId);

    // Kiểm tra xem phần tử có tồn tại không
    if (!quantityElement) {
        alert("Không tìm thấy phần tử nhập số lượng vé!");
        return;
    }

    // Lấy giá trị số lượng vé và kiểm tra tính hợp lệ
    const quantity = parseInt(quantityElement.value);
    if (isNaN(quantity) || quantity < 1) {
        alert("Vui lòng nhập số lượng vé hợp lệ!");
        return;
    }

    // Tính tổng giá trị và cập nhật
    const totalCost = quantity * price;
    updateTotalPrice(totalCost);
}

// Hàm cập nhật tổng tiền
function updateTotalPrice(amount) {
    const totalPriceElement = document.getElementById("totalPrice");

    // Kiểm tra nếu phần tử tồn tại
    if (!totalPriceElement) {
        console.error("Không tìm thấy phần tử 'totalPrice'");
        return;
    }

    // Lấy giá trị tổng hiện tại từ dataset và tính tổng mới
    const currentTotal = parseInt(totalPriceElement.dataset.total) || 0;
    const newTotal = currentTotal + amount;

    // Cập nhật giá trị mới vào dataset và hiển thị trên giao diện
    totalPriceElement.dataset.total = newTotal;
    totalPriceElement.innerText = `Tổng tiền: ${newTotal.toLocaleString()} VND`;
}

// Hàm xử lý khi người dùng thanh toán
function checkout() {
    const totalPriceElement = document.getElementById("totalPrice");

    // Kiểm tra nếu phần tử tồn tại
    if (!totalPriceElement) {
        console.error("Không tìm thấy phần tử 'totalPrice'");
        return;
    }

    const totalAmount = parseInt(totalPriceElement.dataset.total) || 0;

    if (totalAmount === 0) {
        alert("Giỏ hàng của bạn trống. Vui lòng chọn vé trước khi thanh toán.");
    } else {
        window.location.href = `checkout.html?total=${totalAmount}`;
    }
}

// Hàm xử lý đăng xuất
function logout() {
    if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
        alert("Bạn đã đăng xuất thành công!");
        window.location.href = "Sign In.html";
    }
}