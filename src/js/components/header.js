
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

  console.log('offsetTop', offsetTop())

  // Hide/show intro block based on scroll position
  const onIntroToggle = position => {
    if (defaults.intro) {
      const target = 40
      const initialPosition = 98
      const height = defaults.intro.offsetHeight

      defaults.intro.style.top = position > target ? `-${height}px` : `${defaults.header.offsetHeight}px`
    }
  }

  // Hide/Show logo wrapper based on scroll position
  const onToggleLogo = position => {
    const target = 40
    defaults.wrapper.style.opacity = position > target ? 1 : 0
  } 

  const onScroll = () => {

    // Get scroll position
    const position = window.scrollY;
    console.log(`Scroll position: ${position}`);

    onToggleLogo(position)
    onIntroToggle(position)
  }


  window.addEventListener('scroll', () => {
    onScroll()
  });

}