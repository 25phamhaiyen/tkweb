// Hàm hiển thị popup với ID tương ứng
function showPopup(popupId) {
    const overlay = document.getElementById(popupId);
    
    // Hiển thị popup
    overlay.style.display = 'block';
  
    // Đóng popup khi nhấn vào nút đóng
    overlay.querySelector('.close-btn').addEventListener('click', () => {
      overlay.style.display = 'none';
    });
  
    // Đóng popup khi nhấn vào khu vực overlay bên ngoài
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.style.display = 'none';
      }
    });
  }
  
  // Hàm kiểm tra thông tin
  function CheckThongTin() {
    const lastname = document.getElementById("Ho").value.trim();
    const id = document.getElementById("MaDatCho").value.trim();
  
    const lastnameCheck = /^[A-Za-z]+$/;
    const idCheck = /^[A-Za-z0-9]+$/;
  
    // Kiểm tra trường hợp thiếu thông tin
    if ( !lastname || !id) {
      showPopup('overlay'); // Hiển thị popup thiếu thông tin
    }
    // Kiểm tra trường hợp sai định dạng
    else if (!lastnameCheck.test(lastname) || !idCheck.test(id)) {
      showPopup('saiDinhDang'); // Hiển thị popup sai định dạng
    }
  }  