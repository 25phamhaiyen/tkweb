function activateTab(tabId) {
    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    const content = document.getElementById('content');

    if (tabId === 'tab1') {
        // Cập nhật trạng thái tab
        tab1.classList.add('active');
        tab1.classList.remove('inactive');
        tab2.classList.add('inactive');
        tab2.classList.remove('active');
        
        // Cập nhật nội dung cho tab "Tìm kiếm mã đặt chỗ"
        content.innerHTML = `
            <div class="khungtrai">
              <p style="font-size: 20px;"> Đăng nhập </p>
              <br>
              <div>Bạn muốn xem chuyến bay đã đặt, đổi lịch trình bay hay
                mua
                thêm dịch vụ hành lý, chỗ ngồi, suất ăn..., vui lòng điền thông tin bên dưới:
              </div>
              <div class="form">
                <div class="khunginput">
                  <input type="text" id="MaDatCho" name="MaDatCho" placeholder="Mã đặt chỗ *" required
                    style="border-style: hidden; outline: none;">
                </div>
                <div class="khunginput">
                  <input type="text" id="Ho" name="Ho" placeholder="Họ*" required
                    style="border-style: hidden; outline: none;">
                </div>
                <div class="khunginput">
                  <input type="text" id="Ten" name="Ten" placeholder="Tên và tên đệm*" required
                    style="border-style: hidden; outline: none;">
                </div>
                <button class="button" onclick="CheckThongTin()">Tìm kiếm</button>
              </div>
            </div>
            <div class="khungphai">
              <div class="khunganh">
                <img src="./bannerSkyJoy.jpg" alt="VietJet Air">
              </div>
            </div>
        `;
    } else {
        // Cập nhật trạng thái tab
        tab2.classList.add('active');
        tab2.classList.remove('inactive');
        tab1.classList.add('inactive');
        tab1.classList.remove('active');
        
        // Cập nhật nội dung cho tab "Chuyến bay sắp tới"
        content.innerHTML = `
        <div class="signin-box">
          <form action="#" class="form">
            <div class="head">
                Đăng nhập
            </div>
            <div class="id">
                <select name="" class="mavung">
                    <option value="+84">(+84)</option>
                    <option value="+44">(+44)</option>
                    <option value="+1">(+1)</option>
                    <option value="+49">(+49)</option>
                    <option value="+34">(+34)</option>
                    <option value="+86">(+86)</option>
                    <option value="+33">(+33)</option>
                    <option value="+82">(+82)</option>
                    <option value="+66">(+66)</option>
                    <option value="+81">(+81)</option>
                    <option value="+65">(+65)</option>
                </select>
            </div>
            <div class="number">
                <input type="number" name="" class="number-box" placeholder="Số điện thoại">
            </div>
            <div class="signin">
                <button class="button-signin">ĐĂNG NHẬP</button>
            </div>
            <div class="note">
                <p style="font-size: 14px;"> Bạn chưa có tài khoản? <a href="../Đăng ký/DangKy.html" style="color: rgb(108, 108, 249); text-decoration: underline;">Đăng ký ngay</a></p>
            </div>
          </form>
          <div class="end-center-box">
            <div class="copyright">
                <p style="color:gray; font-size: 14px;">Được cung cấp và xác thực bởi SkyJoy ID</p>
            </div>
            <div class="taitro">
                <div class="skyloy">
                    <img src="./img/sky-loy.svg" alt="" class="first-img">
                </div>
                <div class="vietjet">
                    <img src="./img/vietjet-air.svg" alt="" class="second-img">
                </div>
                <div class="galaxy-pay">
                    <img src="./img/galaxy-pay.svg" alt="" class="third-img">
                </div>
            </div>
            <div class="question">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="margin-right: 2px;" class="icon"><path d="M8.75 5.75H7.25V4.25H8.75V5.75ZM8.75 11.75H7.25V7.25H8.75V11.75ZM8 0.5C7.01509 0.5 6.03982 0.693993 5.12987 1.0709C4.21993 1.44781 3.39314 2.00026 2.6967 2.6967C1.29018 4.10322 0.5 6.01088 0.5 8C0.5 9.98912 1.29018 11.8968 2.6967 13.3033C3.39314 13.9997 4.21993 14.5522 5.12987 14.9291C6.03982 15.306 7.01509 15.5 8 15.5C9.98912 15.5 11.8968 14.7098 13.3033 13.3033C14.7098 11.8968 15.5 9.98912 15.5 8C15.5 7.01509 15.306 6.03982 14.9291 5.12987C14.5522 4.21993 13.9997 3.39314 13.3033 2.6967C12.6069 2.00026 11.7801 1.44781 10.8701 1.0709C9.96018 0.693993 8.98491 0.5 8 0.5Z" fill="#0077E5"></path></svg>               
                <div class="ques-content">
                    <p onclick="skyjoy()">Bạn đã biết về Vietjet SkyJoy?</p>
                </div>
            </div>
            <div class="sj-con" id="display-sj" style="display: none;">
              <div class="main-content">
                <span class="close-button" onclick="closeModal()">&times;</span>
                <h3 style="text-align: center;">Bạn đã biết về Vietjet SkyJoy?</h3>
                <p class="para">Chương trình khách hàng thân thiết của Vietjet mang đến niềm vui bằng cách làm phong phú mỗi thành viên với cơ hội kiếm điểm và đổi thưởng không giới hạn tại Việt Nam và trên toàn thế giới. Thành viên có thể dễ dàng kiếm SkyPoint trên mỗi 10.000 VND chi tiêu với Vietjet, nhanh chóng thăng hạng thành viên và tận hưởng các quyền lợi ưu tiên tại sân bay cùng nhiều ưu đãi hấp dẫn khác.</p>
                <p class="para">Xem hướng dẫn đăng ký <a href="https://skyjoy.vietjetair.com/dang-ky-tai-khoan-hoi-vien-vietjet-skyjoy-boi-thu-skypoint-doi-ve-may-bay-voucher-hot/">Tại đây</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="img-box">
          <img src="./img/480x648-1729833296292.png" alt="" class="main-img">
        </div>
        `;
    }
}

function searchBooking() {
    alert("Đang tìm kiếm mã đặt chỗ...");
}




