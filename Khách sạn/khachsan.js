function togglePopup() {
    const centerContent = document.getElementById("centerContent");
    const displayDiv = document.getElementById("displayDiv");
    if (centerContent.style.display === "block") {
        centerContent.style.display = "none";
        displayDiv.style.display = "block";
    }
    else {
        centerContent.style.display = "block";
        displayDiv.style.display = "none";
    }
}


const calendar = document.querySelector('.calendar');
const previousBtn = document.getElementById('previous-month');
const nextBtn = document.getElementById('next-month');
const contentMonth = document.getElementById('content-month');
const contentYear = document.getElementById('content-year');
const daysContainer = document.querySelector('.days');
const selectStartDateBtn = document.getElementById('select-start-date'); // Nút chọn ngày đi
const selectEndDateBtn = document.getElementById('select-end-date'); // Nút chọn ngày đến

let currentMonth = new Date().getMonth(); // Tháng hiện tại
let currentYear = new Date().getFullYear(); // Năm hiện tại
let today = new Date(); // Ngày hôm nay
let selectedDateType = null; // Biến để xác định nút nào được chọn
const nameMonths = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

// Hiển thị lịch cho tháng và năm hiện tại
function generateCalendar(month, year) {
    daysContainer.innerHTML = ''; // Xóa các ngày cũ
    contentMonth.textContent = "Tháng " + nameMonths[month]; // Hiển thị tên tháng
    contentYear.textContent = year; // Hiển thị năm

    const firstDay = new Date(year, month, 1).getDay(); // Ngày đầu tiên của tháng
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Số ngày trong tháng

    // Thêm khoảng trống cho các ngày trước ngày đầu tháng
    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<div class="empty"></div>`;
    }

    // Tạo các ngày trong tháng
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        dayDiv.classList.add('day');
        const currentDate = new Date(year, month, day);
        // Kiểm tra nếu ngày hiện tại nằm trước ngày hôm nay
        if (currentDate < today.setHours(0, 0, 0, 0)) {
            dayDiv.classList.add('disabled'); // Vô hiệu hóa các ngày trước hôm nay
        } else {
            dayDiv.onclick = () => {
                if (selectedDateType === 'start') {
                    // Cập nhật nội dung của nút chọn ngày đi với ngày đã chọn
                    selectStartDateBtn.textContent = `${day}/${month + 1}/${year}`;
                } else if (selectedDateType === 'end') {
                    // Cập nhật nội dung của nút chọn ngày đến với ngày đã chọn
                    selectEndDateBtn.textContent = `${day}/${month + 1}/${year}`;
                }
                calendar.style.display = 'none'; // Ẩn lịch sau khi chọn
            };
        }
        daysContainer.appendChild(dayDiv);
    }
}

// Hiển thị lịch khi nhấn nút
function showCalendar(type) {
    selectedDateType = type; // Ghi nhớ loại ngày được chọn
    calendar.style.display = (calendar.style.display === 'none' || calendar.style.display === '') ? 'block' : 'none';
    generateCalendar(currentMonth, currentYear);
}

selectStartDateBtn.onclick = () => showCalendar('start'); // Hiển thị lịch cho ngày đi
selectEndDateBtn.onclick = () => showCalendar('end'); // Hiển thị lịch cho ngày đến


// Điều hướng qua các tháng
previousBtn.onclick = () => {
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
    generateCalendar(currentMonth, currentYear);
};

nextBtn.onclick = () => {
    currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
    currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
    generateCalendar(currentMonth, currentYear);
};

// Khởi tạo lịch với tháng và năm hiện tại
generateCalendar(currentMonth, currentYear);

// select room
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') ? 'block' : 'none';
}

function selectOption(label, details) {
    const selectionDisplay = document.getElementById('selection-display');
    selectionDisplay.innerHTML = `${label} <br> <small>${details}</small>`;
    toggleDropdown(); // Đóng dropdown sau khi chọn
}

// Đóng dropdown khi nhấn ngoài
window.onclick = function (event) {
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (!event.target.closest('.dropdown-container')) {
        dropdownMenu.style.display = 'none';
    }
};