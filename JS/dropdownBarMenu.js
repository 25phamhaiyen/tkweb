function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const isVisible = dropdownMenu.style.display === 'flex';
    dropdownMenu.style.display = isVisible ? 'none' : 'flex';
}

// Đóng menu khi nhấp ra ngoài vùng menu
document.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const hamburger = document.querySelector('.hamburger');
    
    if (dropdownMenu.style.display === 'flex' && !dropdownMenu.contains(event.target) && !hamburger.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});

// Đóng menu khi phóng to màn hình trở lại
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.getElementById('dropdownMenu').style.display = 'none';
    }
});