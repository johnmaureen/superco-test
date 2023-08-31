
export function headerIntroToggle() {

  const defaults = {
    header: document.querySelector('.header-wrapper'),
    intro: document.querySelector('.header-intro'),
    hero: document.querySelector('.hero-banner'),
  }

  // Hide/show intro block based on scroll position
  const onIntroToggle = position => {
    if (defaults.intro) {
      const target = 40

      if (position > target) {
        defaults.header.classList.remove('exploded')
        defaults.hero.classList.remove('exploded')
      } else {
        if (!defaults.header.classList.contains('exploded')) {
          defaults.header.classList.add('exploded')
        }

        if (!defaults.hero.classList.contains('exploded')) {
          defaults.hero.classList.add('exploded')
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