document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Formni qayta yuklashni oldini oladi
    document.getElementById('confirmation-message').style.display = 'block';
    this.reset(); // Formni tozalaydi
});
