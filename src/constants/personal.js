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
    ],

    projectsInfo: [
      {
        title: 'C-Beta Backend',
        image: 'cbeta',
        associated: [
          {
            text: 'PT. Mega Medica Pharmaceuticals',
            url: 'https://channa.id'
          },
          {
            text: "BINUS University's BDSRC",
            url: 'https://research.binus.ac.id/bdsrc/'
          }
        ],
        tech: 'Node JS, Sequelize ORM, MySQL',
        team: '',
        description: `C-Beta is a platform designed to create surveys and collect data.
        This application was created in collaboration with Bina Nusantara University (BINUS) with
        PT. Mega Medica Pharmaceutical (MMP) to oversee the healing process for COVID-19 patients
        which is supported by the provision of Striatamine products from MMP. By using C-Beta,
        patients are expected to be monitored easily, recovery can be accelerated, and patient
        recovery patterns can be modeled with data science.`,
        links: [
          {
            text: 'Article',
            url: 'https://research.binus.ac.id/bdsrc/2020/12/10/channa-benefit-tracking-app/'
          },
          {
            text: 'Website',
            url: 'http://dev.nusaiot.id:5000/',
          },
        ]
      },
      {
        title: 'Rearive',
        image: 'rearive',
        associated: [
          {
            text: 'Abersoft Technologies',
            url: 'https://abersoft.se/'
          },
        ],
        tech: 'React JS, React Native, Node JS',
        team: 'Andrew C.',
        description: `Rearive is a stock monitoring system that makes shipping easier and safer.
        Available as web app and mobile app, everything a user has to do is generate a QR code 
        from the web app, print it out, and stick it on the things that are to be shipped. 
        The mobile app then can be used to scan the QR code to verify the shipping.`,
        links: [
          {
            text: 'Website',
            url: 'http://portal.rearive.com/',
          },
        ]
      },
    ]
  });
};

export default personal;