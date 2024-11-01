function openTab(event, tabId) {
    // Ẩn tất cả nội dung tab
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach((content) => content.classList.remove("active"));

    // Loại bỏ lớp active của tất cả các nút tab
    const tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach((button) => button.classList.remove("active"));

    // Hiển thị nội dung tab được chọn
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}
function shop(){
    // Lấy hai phần tử cần thao tác
    const table1 = document.getElementById("table1");
    const table2 = document.getElementById("table2");

    // Kiểm tra và thay đổi hiển thị của chúng
    if (table1.style.display === "block") {
        table1.style.display = "none";
        table2.style.display = "block";
    } 
    else {
        table1.style.display = "block";
        table2.style.display = "none";
    }
}
function hienthikhung() {
    document.getElementById("close").style.display = "block";
}

function dongkhung() {
    document.getElementById("close").style.display = "none";
}    