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

// Add product to cart
export function addToCart() {
  
  const products = document.querySelectorAll('.product-item')
  if (products) {
    
    products.forEach(product => {
      product.addEventListener('click', e => {

        const id = product.dataset.id
        let formData = {
          'items': [{
            'id': id,
            'quantity': 1
          }]
        };

        $.ajax({
          url: `/cart/add.js`,
          type: 'POST',
          dataType: 'json',
          data: formData,
          success: function (response) {
            console.log(`${ response.items[0].title } has been added to cart:`);
          },
          error: function (xhr, status, error) {
            console.error('Failed to add product to cart:', error);
          },
        });

      })
    })

  }

}