
export function headerIntroToggle() {

  const defaults = {
    header: document.querySelector('.header-wrapper'),
    utilBar: document.querySelector('.utility-bar'),
    wrapper: document.querySelector('.header--state__exploded .header__heading-logo-wrapper'),
    intro: document.querySelector('.header-intro')
  }

  const offsetTop = () => {
    if (window.innerWidth > 767) {
      return defaults.utilBar.offsetHeight + defaults.header.offsetHeight
    } else {
      return defaults.header.offsetHeight
    }
  }


  // Hide/show intro block based on scroll position
  const onIntroToggle = position => {
    if (defaults.intro) {
      const target = 30

      if (position > target) {
        defaults.header.classList.remove('exploded')
      } else {
        if (!defaults.header.classList.contains('exploded')) {
          defaults.header.classList.add('exploded')
        }
      }

    }
  }
 

  const onScroll = () => {
    // Get scroll position
    const position = window.scrollY;

    onIntroToggle(position)
  }


  window.addEventListener('scroll', () => {
    onScroll()
  });

}