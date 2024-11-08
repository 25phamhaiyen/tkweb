// có tham khảo chatgpt


// hiển thị khung
function skyjoy() {
    document.getElementById("display-sj").style.display = "flex";
}
// đóng khung
function closeModal() {
    document.getElementById("display-sj").style.display = "none";
}
// kiểm tra số điện thoại
function validatePhoneNumber() {
    const countryCode = document.querySelector('.mavung').value; // Lấy mã vùng
    const phoneNumber = document.querySelector('.number-box').value; // Lấy số điện thoại
    const errorMessage = document.createElement('div'); // Tạo div chứa thông báo lỗi
    errorMessage.style.color = 'red'; // Đặt màu cho thông báo lỗi

    // Xóa thông báo lỗi cũ nếu có
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    // kiểm tra thanh input có rỗng hay không
    if (phoneNumber === '') {
        document.querySelector('.button-signin').style.marginTop = '0px';
        document.querySelector('.button-signin').style.backgroundColor = '';
        return;
    }
    // Định nghĩa các mẫu số điện thoại cho từng mã vùng (bao gồm số 0 đầu tiên)
    const phonePatterns = {
        "+84": /^0\d{9}$/,    // Việt Nam - 10 chữ số
        "+44": /^0\d{10}$/,   // Anh - 11 chữ số
        "+1": /^0\d{10}$/,    // Mỹ - 11 chữ số
        "+49": /^0\d{10,11}$/, // Đức - 11 hoặc 12 chữ số
        "+34": /^0\d{9}$/,    // Tây Ban Nha - 10 chữ số
        "+86": /^0\d{11}$/,   // Trung Quốc - 12 chữ số
        "+33": /^0\d{9}$/,    // Pháp - 10 chữ số
        "+82": /^0\d{9,10}$/, // Hàn Quốc - 10 hoặc 11 chữ số
        "+66": /^0\d{9}$/,    // Thái Lan - 10 chữ số
        "+81": /^0\d{10}$/,   // Nhật Bản - 11 chữ số
        "+65": /^0\d{8}$/     // Singapore - 9 chữ số
    };
    const selectedPattern = phonePatterns[countryCode];
    // Kiểm tra số điện thoại bao gồm số 0 đầu tiên
    if (!selectedPattern.test(phoneNumber)) {
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Số điện thoại không đúng định dạng. Vui lòng nhập lại';
        document.querySelector('.number').appendChild(errorMessage); // gắn thẻ thông báo lỗi vào thẻ number
        document.querySelector('.button-signin').style.backgroundColor = ''; // Đặt lại màu nút 
        document.querySelector('.button-signin').style.marginTop = '15px'; // tạo margin của nút đăng nhập với dòng thông báo lỗi
        document.querySelector('.button-signin').style.cursor = '';
    } 
    else {
        // Nếu hợp lệ, xóa thông báo lỗi và đổi màu nút đăng nhập
        document.querySelector('.button-signin').style.marginTop = '0px';
        document.querySelector('.button-signin').style.backgroundColor = 'yellow'; // Đổi màu nút
        document.querySelector('.button-signin').style.color = 'black';
        document.querySelector('.button-signin').style.cursor = 'pointer';
    }
}
// Thêm sự kiện khi người dùng nhập vào ô số điện thoại
document.querySelector('.number-box').addEventListener('input', function() {
    validatePhoneNumber(); // Gọi hàm kiểm tra số điện thoại
});

