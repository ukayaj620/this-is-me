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
    case 'github':
      return require('../assets/icons/github.svg').default;
    case 'linkedin':
      return require('../assets/icons/linkedin.svg').default;
    case 'facebook':
      return require('../assets/icons/facebook.svg').default;
    case 'whatsapp':
      return require('../assets/icons/whatsapp.svg').default;
    case 'telegram':
      return require('../assets/icons/telegram.svg').default;
    case 'link':
      return require('../assets/icons/link.svg').default;
    default:
      return require('../assets/icons/about.svg').default;
  }
};

const images = (image) => {
  switch (image) {
    case 'profile':
      return require('../assets/images/me.png').default;
    case 'methodist':
      return require('../assets/images/methodist-3.jpg').default;
    case 'ubm':
      return require('../assets/images/bunda-mulia-university.png').default;
    case 'rearive':
      return require('../assets/images/rearive.png').default;
    case 'cbeta':
      return require('../assets/images/cbeta.png').default;
    case 'restup':
      return require('../assets/images/restup-php.png').default;
    case 'codenitiva':
      return require('../assets/images/codenitiva.png').default;
    case 'covidfo':
      return require('../assets/images/covidfo.png').default;
    default:
      return require('../assets/icons/about.svg').default;
  }
}

export { icons, images };