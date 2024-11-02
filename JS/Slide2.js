let index = 0;

function showSlides2(n) {
  const slides = document.querySelectorAll('.slide2');
  
  // Kiểm tra nếu n vượt quá số lượng slide
  if (n >= slides.length) index = 0; // Quay lại slide đầu
  if (n < 0) index = slides.length - 1; // Quay lại slide cuối

  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'flex' : 'none'; // Hiện slide hiện tại
  });
}

function moveSlide2(n) {
  index += n; // Cập nhật chỉ số slide
  showSlides2(index); // Gọi hàm để hiển thị slide
}

// Khởi tạo slide khi DOM được tải
document.addEventListener('DOMContentLoaded', () => {
  showSlides2(index);
});
