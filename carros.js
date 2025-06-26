 var slide = document.querySelector('.slideshow'); // corrigido de .carros para .slideshow

var images = [
    'imagens/BannerS.png',
    'imagens/BannerCarros.png',
];

var time = 3000;
var count = 0;

function movecarros() {
    slide.src=images[count];
	if(count <images.length -1){
		count++;
	} else {
		count=0;
		}
    setTimeout(movecarros, time); // corrigido: não usar string em setTimeout
}

window.onload = movecarros;


  
$(document).ready(function(){
    $('.customer-logos').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 4 } },
        { breakpoint: 520, settings: { slidesToShow: 3 } }
      ]
    });
  });

  // JS opcional para animação quando entra na tela
document.addEventListener('DOMContentLoaded', function () {
    const h3s = document.querySelectorAll('h3');
    h3s.forEach(h3 => {
        h3.style.opacity = 0;
        h3.style.transform = 'translateY(20px)';
        setTimeout(() => {
            h3.style.transition = 'all 0.6s ease';
            h3.style.opacity = 1;
            h3.style.transform = 'translateY(0)';
        }, 300);
    });
});

const button = document.getElementById('toggle-dark-mode');
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    button.textContent = document.body.classList.contains('dark-mode') ? '☀️ ' : '🌙 ';
  });