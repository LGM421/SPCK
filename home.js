function buyTicket(quantityId, price, movieName) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    if (isNaN(quantity) || quantity < 1) {
        alert("Vui lòng nhập số lượng vé hợp lệ!");
        return;
    }

    // Tính tổng tiền cho mỗi phim
    const totalCost = quantity * price;
    updateTotalPrice(totalCost);

    // Hiển thị chi tiết vé đã thêm vào giỏ hàng
    addToCart(movieName, quantity, price);
}

function updateTotalPrice(amount) {
    const totalPriceElement = document.getElementById("totalPrice");
    const currentTotal = parseInt(totalPriceElement.dataset.total) || 0;
    const newTotal = currentTotal + amount;

    totalPriceElement.dataset.total = newTotal;
    totalPriceElement.innerText = `Tổng tiền: ${newTotal.toLocaleString()} VND`;
}

function addToCart(movieName, quantity, price) {
    const cartDetails = document.getElementById("cartDetails");

    // Tạo dòng chi tiết mới cho giỏ hàng
    const newItem = document.createElement("div");
    newItem.className = "cart-item";
    newItem.innerHTML = `
        <p>${movieName}: ${quantity} vé x ${price.toLocaleString()} VND = ${(quantity * price).toLocaleString()} VND</p>
    `;

    // Thêm vào khu vực giỏ hàng
    cartDetails.appendChild(newItem);
}

function checkout() {
    const totalPriceElement = document.getElementById("totalPrice");
    const totalAmount = parseInt(totalPriceElement.dataset.total) || 0;

    if (totalAmount === 0) {
        alert("Giỏ hàng của bạn trống. Vui lòng chọn vé trước khi thanh toán.");
    } else {
        // Chuyển hướng đến trang checkout.html và truyền tổng tiền qua URL
        window.location.href = `checkout.html?total=${totalAmount}`;
    }
}

function logout() {
    const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmLogout) {
        alert("Bạn đã đăng xuất thành công!");
        window.location.href = "Sign In.html";
    }
}