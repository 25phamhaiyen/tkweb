// Tạo độ trễ và ẩn màn hình tải sau khi tải xong
window.addEventListener("load", function() {
    setTimeout(function() {
        document.body.classList.add("loaded");
    }, 2000); // Trễ 3 giây
});