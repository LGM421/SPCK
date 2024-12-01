function buyTicket(quantityId, price, movieName) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    if (isNaN(quantity) || quantity < 1) {
        alert("Vui lòng nhập số lượng vé hợp lệ!");
        return;
    }

    const totalCost = quantity * price;
    updateTotalPrice(totalCost);
}

function updateTotalPrice(amount) {
    const totalPriceElement = document.getElementById("totalPrice");
    const currentTotal = parseInt(totalPriceElement.dataset.total) || 0;
    const newTotal = currentTotal + amount;

    totalPriceElement.dataset.total = newTotal;
    totalPriceElement.innerText = `Tổng tiền: ${newTotal.toLocaleString()} VND`;
}

function checkout() {
    const totalPriceElement = document.getElementById("totalPrice");
    const totalAmount = parseInt(stotalPriceElement.dataset.total) || 0;

    if (totalAmount === 0) {
        alert("Giỏ hàng của bạn trống. Vui lòng chọn vé trước khi thanh toán.");
    } else {
        window.location.href = `checkout.html?total=${totalAmount}`;
    }
}

function logout() {
    if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
        alert("Bạn đã đăng xuất thành công!");
        window.location.href = "Sign In.html";
    }
}