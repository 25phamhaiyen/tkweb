// có tham khảo chatgpt

// hàm ẩn hiện placeholder //
document.addEventListener('DOMContentLoaded', function() {
    const firstName = document.querySelector('.ho');
    const secondName = document.querySelector('.ten');
    const numberBox = document.querySelector('.number-box');
    const mailBox = document.querySelector('.mail-box');
    const code = document.querySelector('.gioithieu');

    // Lưu giữ placeholder gốc
    const firstNamePlaceholder = firstName.placeholder;
    const secondNamePlaceholder = secondName.placeholder;
    const numberBoxPlaceholder = numberBox.placeholder;
    const mailBoxPlaceholder = mailBox.placeholder;
    const codePlaceholder = code.placeholder;

    // Khi ô input được focus, xóa placeholder
    firstName.addEventListener('focus', function(){
        firstName.placeholder = '';
    });
    secondName.addEventListener('focus', function(){
        secondName.placeholder = '';
    });
    numberBox.addEventListener('focus', function() {
        numberBox.placeholder = '';
    });
    mailBox.addEventListener('focus', function() {
        mailBox.placeholder = '';
    });
    code.addEventListener('focus', function(){
        code.placeholder = '';
    });

    // Khi ô input mất focus, khôi phục placeholder nếu ô trống
    firstName.addEventListener('blur', function(){
        if( firstName.value === '' ){
            firstName.placeholder = firstNamePlaceholder;
        }
    });
    secondName.addEventListener('blur', function(){
        if( secondName.value === '' ){
            secondName.placeholder = secondNamePlaceholder;
        }
    });
    numberBox.addEventListener('blur', function() {
        if( numberBox.value === '' ){
            numberBox.placeholder = numberBoxPlaceholder;
        }
    });
    mailBox.addEventListener('blur', function() {
        if( mailBox.value === '' ){
            mailBox.placeholder = mailBoxPlaceholder;
        }
    });
    code.addEventListener('blur', function(){
        if( code.value === '' ){
            code.placeholder = codePlaceholder;
        }
    })
});

// tạo các biến để check mỗi ô nhập có hợp lệ hay không
let isHoValid = false;
let isTenValid = false;
let isPhoneNumberValid = false;
let isEmailValid = false;
let isBirthday = false;
// check các ô đã nhập đúng dữ liệu
function checkFormValidity() {
    const registerButton = document.querySelector('.button'); 
    if( isHoValid && isTenValid && isPhoneNumberValid && isEmailValid && isBirthday ) {
        registerButton.classList.add('active');
    } 
    else {
        registerButton.classList.remove('active');
    }
}

// hàm kiểm tra họ tên
document.addEventListener('DOMContentLoaded', function() {
    const hoInput = document.getElementById('ho');
    const tenInput = document.getElementById('ten');
    const hoErrorMessage = document.querySelector('.ho-error-message');
    const tenErrorMessage = document.querySelector('.ten-error-message');
    hoInput.addEventListener('input', function() {
        validateHo(); // Gọi hàm kiểm tra họ
    });
    tenInput.addEventListener('input', function() {
        validateTen(); // Gọi hàm kiểm tra tên
    });
    function validateHo() {
        const hoValue = hoInput.value.trim();
        // Biểu thức chính quy cho họ tiếng Việt
        const hoPattern = /^[\p{L}’\s\-]+$/u; 

        // Xóa thông báo lỗi cũ nếu có
        hoErrorMessage.textContent = '';

        // Kiểm tra nếu ô nhập họ trống
        if (hoValue === '') {
            hoErrorMessage.textContent = 'Thông tin bắt buộc';
            hoErrorMessage.style.marginLeft = '70px';  // tạo margin
            document.querySelector('.note').style.marginTop = '25px';
            isHoValid = false;
        } 
        // Kiểm tra xem họ có hợp lệ không
        else if (!hoPattern.test(hoValue)) {
            hoErrorMessage.style.marginLeft = '0px'; // xóa margin
            hoErrorMessage.textContent = 'Chỉ nhập tiếng Việt có dấu, và sử dụng ký tự [’].';
            document.querySelector('.note').style.marginTop = '25px';
            isHoValid = false;
        }
        else {
            hoErrorMessage.style.marginLeft = '0px';
            document.querySelector('.note').style.marginTop = '2px';
            isHoValid = true;
        }
        checkFormValidity();
    }
    function validateTen() {
        const tenValue = tenInput.value.trim();
        // Biểu thức chính quy cho tên tiếng Việt
        const tenPattern = /^[\p{L}’\s\-]+$/u; 

        // Xóa thông báo lỗi cũ nếu có
        tenErrorMessage.textContent = '';

        // Kiểm tra nếu ô nhập tên trống
        if (tenValue === '') {
            tenErrorMessage.textContent = 'Thông tin bắt buộc';
            tenErrorMessage.style.marginLeft = '70px';
            document.querySelector('.note').style.marginTop = '25px';
            isTenValid = false;
        } 
        // Kiểm tra xem tên có hợp lệ không
        else if (!tenPattern.test(tenValue)) {
            tenErrorMessage.style.marginLeft = '0px';
            tenErrorMessage.textContent = 'Chỉ nhập tiếng Việt có dấu, và sử dụng ký tự [’].';
            document.querySelector('.note').style.marginTop = '25px';
            isTenValid = false;
        }
        else {
            tenErrorMessage.style.marginLeft = '0px';
            document.querySelector('.note').style.marginTop = '2px';
            isTenValid = true;
        }
        checkFormValidity();
    }
});


// hàm kiểm tra số điện thoại
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
    errorMessage.className = 'error-message';

    if (phoneNumber === '') {
        errorMessage.textContent = 'Thông tin bắt buộc';
        document.querySelector('.number').appendChild(errorMessage);
        document.querySelector('.mail').style.marginTop = '20px';
        isPhoneNumberValid = false;
    }
    else if (!selectedPattern.test(phoneNumber)) {
        errorMessage.textContent = 'Số điện thoại không hợp lệ';
        document.querySelector('.number').appendChild(errorMessage); // gắn thẻ thông báo lỗi vào thẻ number
        document.querySelector('.mail').style.marginTop = '20px'; // tạo margin của thẻ mail với dòng thông báo lỗi
        isPhoneNumberValid = false;
    } 
    else {
        // xóa margin
        document.querySelector('.mail').style.marginTop = '0px';
        isPhoneNumberValid = true;
    }
    checkFormValidity();
}
// Thêm sự kiện khi người dùng nhập vào ô số điện thoại
document.querySelector('.number-box').addEventListener('input', function() {
    validatePhoneNumber(); // Gọi hàm kiểm tra số điện thoại
});

// kiểm tra ô ngày sinh đã có dữ liệu chưa
function checkBirthday() {
    const dobInput = document.getElementById('date');
    if (dobInput.value === '') {
        isBirthday = false;
    } 
    else {
        isBirthday = true;
    }
    checkFormValidity();
}
document.querySelector('.date-box').addEventListener('input', function() {
    checkBirthday()// Gọi hàm kiểm tra số điện thoại
});

// hàm kiểm tra email
function validateEmail() {
    const mail = document.querySelector('.mail-box').value; // Lấy mã vùng
    const errorMessage = document.createElement('div'); // Tạo div chứa thông báo lỗi
    errorMessage.style.color = 'red'; // Đặt màu cho thông báo lỗi

    // Xóa thông báo lỗi cũ nếu có
    const existingError = document.querySelector('.mail-error-message');
    if( existingError ) {
        existingError.remove();
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    errorMessage.className = 'mail-error-message';

    // kiểm tra thanh input có rỗng hay không
    if( mail === '' ) {
        errorMessage.style.marginLeft = '180px';
        errorMessage.textContent = 'Thông tin bắt buộc';
        document.querySelector('.text').appendChild(errorMessage);
        document.querySelector('.magioithieu').style.marginTop = '20px';
        isEmailValid = false;
    }
    else if (!emailPattern.test(mail)) {
        errorMessage.style.marginLeft = '160px';
        errorMessage.textContent = 'Địa chỉ email không hợp lệ';
        document.querySelector('.text').appendChild(errorMessage); // gắn thẻ thông báo lỗi vào thẻ text
        document.querySelector('.magioithieu').style.marginTop = '20px'; // tạo margin của mã giới thiệu với dòng thông báo lỗi
        isEmailValid = false;
    } 
    else {
        // xóa margin
        document.querySelector('.magioithieu').style.marginTop = '0px';
        isEmailValid = true;
    }
    checkFormValidity();
}

// Thêm sự kiện khi người dùng nhập mail
document.querySelector('.mail-box').addEventListener('input', function() {
    validateEmail(); // Gọi hàm kiểm tra mail
});

// hiển thị khung
function skyjoy() {
    document.getElementById("display-sj").style.display = "flex";
}
// đóng khung
function closeModal() {
    document.getElementById("display-sj").style.display = "none";
}
