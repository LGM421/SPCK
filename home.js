// Hàm mua vé
function buyTicket(quantityId, price, movieTitle) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    if (isNaN(quantity) || quantity < 1) {
        alert("Vui lòng nhập số lượng vé hợp lệ!");
        return;
    }

    const totalCost = quantity * price;
    updateTotalPrice(totalCost);

    alert(`Bạn đã mua ${quantity} vé cho phim "${movieTitle}" với giá ${totalCost.toLocaleString()} VND.`); //Hiện thông báo khi người dùng mua vé
}

// Cập nhật tổng tiền
function updateTotalPrice(amount) {
    const totalPriceElement = document.getElementById("totalPrice");
    if (!totalPriceElement) {
        console.error("Không tìm thấy phần tử 'totalPrice'.");
        return;
    }

    const currentTotal = parseInt(totalPriceElement.dataset.total) || 0;
    const newTotal = currentTotal + amount;

    totalPriceElement.dataset.total = newTotal;
    totalPriceElement.style.display = "block";
    totalPriceElement.innerText = `Tổng tiền: ${newTotal.toLocaleString()} VND`;
}

// Hàm thanh toán
function checkout() {
    const totalPriceElement = document.getElementById("totalPrice");
    const totalAmount = parseInt(totalPriceElement.dataset.total) || 0;

    if (totalAmount === 0) {
        alert("Giỏ hàng của bạn trống. Vui lòng chọn vé trước khi thanh toán.");
    } else {
        alert(`Tổng số tiền cần thanh toán là ${totalAmount.toLocaleString()} VND.`);
        // Chuyển hướng tới trang thanh toán
        window.location.href = `checkout.html?total=${totalAmount}`;
    }
}

// Hàm đăng xuất
function logout() {
    const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmLogout) {
        alert("Bạn đã đăng xuất thành công!");
        // Chuyển hướng tới trang đăng nhập
        window.location.href = "Sign In.html";
    }
}

// Hàm tìm kiếm phim
function searchMovies() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const movies = document.querySelectorAll(".movie");

    let found = false; // Biến kiểm tra có tìm thấy phim hay không
    movies.forEach((movie) => {
        const movieTitle = movie.querySelector("h2").innerText.toLowerCase();
        if (movieTitle.includes(searchTerm)) {
            movie.style.display = "block";
            found = true;
        } else {
            movie.style.display = "none";
        }
    });

    if (!found && searchTerm.trim() !== "") {
        alert("Không tìm thấy phim nào khớp với từ khóa!");
    }

    // Nếu thanh tìm kiếm trống, hiện lại tất cả phim
    if (searchTerm.trim() === "") {
        movies.forEach((movie) => (movie.style.display = "block"));
    }
}