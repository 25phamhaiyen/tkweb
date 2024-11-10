function setupDropdown(inputId, optionsId) {
  const input = document.getElementById(inputId);
  const options = document.getElementById(optionsId);

  input.addEventListener('focus', () => {
    options.classList.add('show');
  });

  input.addEventListener('blur', () => {
    setTimeout(() => options.classList.remove('show'), 150);
  });
}

function selectOption(selectedInputId, otherInputId, value, code) {
  const selectedInput = document.getElementById(selectedInputId);
  const selectedOptions = document.getElementById(selectedInputId === 'fromInput' ? 'fromOptions' : 'toOptions');
  const otherOptions = document.getElementById(otherInputId === 'fromInput' ? 'fromOptions' : 'toOptions');

  // Kiểm tra xem các tham số có hợp lệ không
  if (!value || !code) {
    console.error("Thiếu giá trị hoặc mã sân bay.");
    return;
  }

  // Đặt giá trị vào input đã chọn
  selectedInput.value = `${value} (${code})`;

  // Ẩn giá trị đã chọn khỏi dropdown của input còn lại
  Array.from(otherOptions.children).forEach(option => {
    if (option.textContent.includes(value)) {
      option.style.display = 'none';
    } else {
      option.style.display = 'block';
    }
  });

  // Hiển thị lại tất cả tùy chọn trong dropdown của input đã chọn
  Array.from(selectedOptions.children).forEach(option => {
    option.style.display = 'block';
  });

  // Đóng dropdown
  selectedInput.blur();
}

// Thiết lập dropdown cho cả hai input
setupDropdown('fromInput', 'fromOptions');
setupDropdown('toInput', 'toOptions');
