// Importing functions or variables from moduleA
import * as featuredProduct from './components/featuredProduct.js';
import * as contentCards from './components/contentCards';
import * as roundMedia from './components/roundMedia';
import * as header from './components/header';
import LazyLoad from "vanilla-lazyload";

const lazyLoadInstance = new LazyLoad({
elements_selector: ".lazy"
  // ... more custom settings?
});
lazyLoadInstance.update();

featuredProduct.sliderInit()
featuredProduct.addToCart()
contentCards.sliderInit()
roundMedia.sliderInit()

header.headerIntroToggle()