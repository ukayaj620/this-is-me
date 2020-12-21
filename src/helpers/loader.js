const icons = (icon) => {
  switch (icon) {
    case 'about':
      return require('../assets/icons/about.svg').default;
    case 'about-active':
      return require('../assets/icons/about-active.svg').default;
    case 'work':
      return require('../assets/icons/work.svg').default;
    case 'work-active':
      return require('../assets/icons/work-active.svg').default;
    case 'publication':
      return require('../assets/icons/publication.svg').default;
    case 'publication-active':
      return require('../assets/icons/publication-active.svg').default;
    default:
      return require('../assets/icons/about.svg').default;
  }
};

const images = (image) => {
  switch (image) {
    case 'profile':
      return require('../assets/images/me.png').default;
    default:
      return require('../assets/icons/about.svg').default;
  }
}

export { icons, images };