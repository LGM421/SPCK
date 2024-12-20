// Mảng chứa thông tin vé đã mua (đã thêm vào localStorage)
let tickets = []; // Mảng này sẽ lưu trữ thông tin các vé đã mua

// Hàm mua vé
function buyTicket(quantityId, price, movieTitle) {
    const quantity = parseInt(document.getElementById(quantityId).value); // Lấy số lượng vé người dùng nhập
    if (isNaN(quantity) || quantity < 1) { // Kiểm tra nếu số lượng vé không hợp lệ (phải là số dương)
        alert("Vui lòng nhập số lượng vé hợp lệ!");
        return;
    }

    const totalCost = quantity * price; // Tính tổng giá trị vé
    updateTotalPrice(totalCost); // Cập nhật tổng số tiền phải thanh toán

    // Lưu vé vào localStorage sau khi mua
    tickets.push({
        movie: movieTitle, // Tên phim
        quantity: quantity, // Số lượng vé
        totalCost: totalCost // Tổng chi phí
    });

    // Lưu lại giỏ hàng vào localStorage
    localStorage.setItem("tickets", JSON.stringify(tickets)); // Chuyển mảng vé thành chuỗi JSON và lưu vào localStorage

    alert(`Bạn đã mua ${quantity} vé cho phim "${movieTitle}" với giá ${totalCost.toLocaleString()} VND.`); // Thông báo cho người dùng
}

// Cập nhật tổng tiền
function updateTotalPrice(amount) {
    const totalPriceElement = document.getElementById("totalPrice"); // Lấy phần tử để hiển thị tổng tiền
    if (!totalPriceElement) { // Nếu không tìm thấy phần tử
        console.error("Không tìm thấy phần tử 'totalPrice'."); // Hiển thị lỗi trên console
        return;
    }

    const currentTotal = parseInt(totalPriceElement.dataset.total) || 0; // Lấy tổng hiện tại, nếu không có thì mặc định là 0
    const newTotal = currentTotal + amount; // Cộng thêm số tiền mới vào tổng tiền

    totalPriceElement.dataset.total = newTotal; // Cập nhật tổng tiền trong thuộc tính dataset
    totalPriceElement.style.display = "block"; // Hiển thị phần tử tổng tiền (nếu nó đã bị ẩn)
    // totalPriceElement.innerText = `Tổng tiền: ${newTotal.toLocaleString()} VND`;  // Bạn có thể dùng dòng này để hiển thị trực tiếp trên giao diện
}

// Hàm thanh toán
function checkout() {
    const totalPriceElement = document.getElementById("totalPrice"); // Lấy phần tử hiển thị tổng tiền
    const totalAmount = parseInt(totalPriceElement.dataset.total) || 0; // Lấy tổng số tiền từ dataset

    if (totalAmount === 0) { // Kiểm tra nếu giỏ hàng trống
        alert("Giỏ hàng của bạn trống. Vui lòng chọn vé trước khi thanh toán.");
    } else {
        alert(`Tổng số tiền cần thanh toán là ${totalAmount.toLocaleString()} VND.`); // Thông báo tổng tiền cần thanh toán
        // Chuyển hướng tới trang thanh toán và truyền tham số tổng tiền qua URL
        window.location.href = `checkout.html?total=${totalAmount}`;

        // Sau khi thanh toán xong, xóa vé khỏi localStorage
        localStorage.removeItem("tickets"); // Xóa thông tin vé khỏi localStorage
        console.log("Vé đã được xóa khỏi localStorage."); // Hiển thị thông báo trong console
    }
}

// Hàm đăng xuất
function logout() {
    const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất?"); // Xác nhận đăng xuất
    if (confirmLogout) {
        alert("Bạn đã đăng xuất thành công!"); // Thông báo đăng xuất thành công
        // Chuyển hướng đến trang đăng nhập
        window.location.href = "Sign In.html";
    }
}

// Hàm tìm kiếm phim
function searchMovies() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase(); // Lấy từ khóa tìm kiếm và chuyển thành chữ thường
    const movies = document.querySelectorAll(".movie"); // Lấy tất cả các phần tử phim có class 'movie'

    let found = false; // Biến kiểm tra có tìm thấy phim hay không
    movies.forEach((movie) => {
        const movieTitle = movie.querySelector("h2").innerText.toLowerCase(); // Lấy tiêu đề phim và chuyển thành chữ thường
        if (movieTitle.includes(searchTerm)) { // Kiểm tra xem tiêu đề phim có chứa từ khóa tìm kiếm không
            movie.style.display = "block"; // Hiển thị phim nếu tìm thấy
            found = true; // Đánh dấu là đã tìm thấy phim
        } else {
            movie.style.display = "none"; // Ẩn phim nếu không tìm thấy
        }
    });

    if (!found && searchTerm.trim() !== "") { // Nếu không tìm thấy phim nào khớp và từ khóa không rỗng
        alert("Không tìm thấy phim nào khớp với từ khóa!"); // Thông báo không tìm thấy phim
    }

    // Nếu thanh tìm kiếm trống, hiện lại tất cả phim
    if (searchTerm.trim() === "") {
        movies.forEach((movie) => (movie.style.display = "block")); // Hiển thị tất cả phim khi thanh tìm kiếm rỗng
    }
}