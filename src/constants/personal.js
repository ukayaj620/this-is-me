const personal = () => {
  return ({
    profile: {
      header: "Hi, I'm Jayaku Briliantio",
      content: `I'm a freelance full stack developer and deep learning enthusiast.
      I'm also a Computer Science Student majoring in Mobile Application Technology at
      Bunda Mulia University.`,
    },

    socialInfo: [
      {
        icon: 'github',
        url: 'https://github.com/ukayaj620',
      },
      {
        icon: 'linkedin',
        url: 'https://www.linkedin.com/in/neartojayakubriliantio',
      },
      {
        icon: 'telegram',
        url: 'https://t.me/jayakubriliantio',
      },
      {
        icon: 'whatsapp',
        url: 'https://wa.me/6281375302111'
      },
    ],

    educationInfo: [
      {
        image: 'ubm',
        title: 'Bunda Mulia University',
        year: '2018-2022',
        major: "Bachelor's Degree, Computer Science",
        description: `I studied Computer Science focused in Mobile Application Development
        in this university. Besides being a student, I involved in various activities such
        as participating Hackathon and Programming Competitions. I also involved in my major 
        student organization called BIOS, where I act as Head of Research and Development.`
      },
      {
        image: 'methodist',
        title: 'SMA Swasta Methodist-3',
        year: '2015-2018',
        major: "Graduated High School, Natural Science (Physics)",
        description: `During my senior high school, I mainly focused on Physics and Biology.
        Besides that, I also participate several competitions held by the Indonesia Goverment
        such as National Science Olympiad (OSN). I participate in Geosains and Biology olympiad.`
      }
    ],

    publicationInfo: [
      {
        title: `Penerapan Convolutional Neural Network untuk Handwriting Recognition 
        pada Aplikasi Belajar Aritmatika Dasar Berbasis Web`,
        author: 'Jayaku Briliantio, Nico Santosa, Garvin Ardian, Lukman Hakim',
        doi: 'December 2020',
        publisher: {
          name: 'Jurnal Teknik Informatika UNIKA St. Thomas',
          url: 'http://ejournal.ust.ac.id/index.php/JTIUST/',
        },
        links: [
          {
            text: 'Publication',
            url: 'http://ejournal.ust.ac.id/index.php/JTIUST/article/view/945'
          },
          {
            text: 'PDF',
            url: 'http://ejournal.ust.ac.id/index.php/JTIUST/article/download/945/pdf1'
          },
        ]
      },
    ]
  });
};

export default personal;