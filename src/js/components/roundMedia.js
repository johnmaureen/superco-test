import 'slick-carousel/slick/slick.css'; // Import the Slick.css file
import 'slick-carousel/slick/slick-theme.css'; // Import the Slick theme CSS file
import $ from 'jquery'; // Import jQuery (required by Slick)
import 'slick-carousel';


// Exporting functions or variables
export function sliderInit() {
  
  $('.round-media__slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
  })

}