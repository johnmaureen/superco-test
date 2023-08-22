import 'slick-carousel/slick/slick.css'; // Import the Slick.css file
import 'slick-carousel/slick/slick-theme.css'; // Import the Slick theme CSS file
import $ from 'jquery'; // Import jQuery (required by Slick)
import 'slick-carousel';


// Exporting functions or variables
export function sliderInit() {
  
  const items = document.querySelectorAll('.product-item')
  const responsive = [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

  // Initialize the slider when the product item is more than 3
  if (items.length > 3) {

    $('.featured-product__items').slick({
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: responsive
    });

  } else {

    // Enable slider if viewport width is 768 below
    if (window.innerWidth <= 768) {

      $('.featured-product__items').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: responsive
      });
    }
  }



}