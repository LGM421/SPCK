function buyTicket(quantityId, price) {
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
    if (!totalPriceElement) {
        console.error("Element with id 'totalPrice' not found.");
        return;
    }

    const currentTotal = parseInt(totalPriceElement.dataset.total) || 0;
    const newTotal = currentTotal + amount;

    totalPriceElement.dataset.total = newTotal;
    totalPriceElement.innerText = `Tổng tiền: ${newTotal.toLocaleString()} VND`;
}

function checkout() {
    const totalPriceElement = document.getElementById("totalPrice");
    const totalAmount = parseInt(totalPriceElement.dataset.total) || 0;

    if (totalAmount === 0) {
        alert("Giỏ hàng của bạn trống. Vui lòng chọn vé trước khi thanh toán.");
    } else {
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

let found = false;
movies.forEach((movie) => {
    const movieTitle = movie.querySelector("h2").innerText.toLowerCase();
    if (movieTitle.includes(searchTerm)) {
        movie.style.display = "block";
        found = true;
    } else {
        movie.style.display = "none";
    }
});

if (!found) {
    alert("Không tìm thấy phim nào khớp với từ khóa!");
}