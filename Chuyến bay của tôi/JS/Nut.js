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
              <p style="font-size: 20px;"> CHUYẾN BAY CỦA TÔI </p>
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
        
        // Cập nhật nội dung cho tab "Chuyến bay của tôi"
        content.innerHTML = `
            <div class="khungtrai">
              <p style="font-size: 20px;"> CHUYẾN BAY CỦA TÔI </p>
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
    }
}

function searchBooking() {
    alert("Đang tìm kiếm mã đặt chỗ...");
}

function CheckThongTin() {
    alert("Đang kiểm tra thông tin chuyến bay...");
}
