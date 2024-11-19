$(document).ready(function(){
  $('.fijyramid-carousel').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		fade: true,
		dots: true
  });
});


// $(document).ready(function(){
// 	$('.work-slideshow').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
// 	autoplay: true,
//   cssEase: 'linear'
// });
// });

const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar ul');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

