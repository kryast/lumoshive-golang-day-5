const klik = document.getElementById("klik");
const navbar = document.getElementById("navbar");

klik.addEventListener('click', function(){
    navbar.classList.toggle('active');
});