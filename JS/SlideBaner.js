let slideIndex = 1;
showSlides(slideIndex);

// Điều khiển slide tiếp theo hoặc trước đó
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Điều khiển slide hiện tại
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myslide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Tự động chuyển slide
setInterval(() => { plusSlides(1); }, 10000); // Chuyển slide sau mỗi 10 giây