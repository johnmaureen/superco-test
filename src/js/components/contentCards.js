import 'slick-carousel/slick/slick.css'; // Import the Slick.css file
import 'slick-carousel/slick/slick-theme.css'; // Import the Slick theme CSS file
import $ from 'jquery'; // Import jQuery (required by Slick)
import 'slick-carousel';


// Initialize content cards slider 
export function sliderInit() {

  if (window.innerWidth <= 1024) {
    $('.content-cards.slider .card-items').slick({
      arrows: false,
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 641,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

}

