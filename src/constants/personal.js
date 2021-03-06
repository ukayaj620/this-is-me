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
        title: 'Itevenz',
        image: 'itevenz',
        associated: [],
        tech: 'Flask, Bootstrap, PostgreSQL',
        team: '',
        description: `Itevenz is a simple website to host IT events, participating an event. It acts like 
        yellow pages of upcoming IT events hosted by users. Currently, this website is under development and 
        still in beta version. This simple projects is to accomplish my university assignment on Web Programming 
        course.`,
        links: [
          {
            text: 'GitHub',
            url: 'https://github.com/ukayaj620/itevenz'
          },
          {
            text: 'Website',
            url: 'https://itevenz.herokuapp.com/',
          },
        ]
      },
      {
        title: 'CovidFo',
        image: 'covidfo',
        associated: [],
        tech: 'Flutter (Mobile Apps), React JS, TailwindCSS',
        team: '',
        description: `Covidfo is a website and mobile application that tracks information related 
        to COVID-19, such as worldwide cases and news. This small project is created to accomplish 
        my university final test at Bunda Mulia University`,
        links: [
          {
            text: 'Apps GitHub',
            url: 'https://github.com/ukayaj620/covidfo'
          },
          {
            text: 'Website GitHub',
            url: 'https://github.com/ukayaj620/covidfo-web'
          },
          {
            text: 'Website',
            url: 'https://covidfo.netlify.app/',
          },
        ]
      },
      {
        title: 'Flu Tic Tac Toe',
        image: 'fluttt',
        associated: [],
        tech: 'Flutter, Firebase',
        team: '',
        description: `Flu Tic Tac Toe is a simple game application to play tic tac toe online and real-time.
        Player could host a game, then share the code to the others inorder to join the game. This simple game
        is made to accomplish my university task on Mobile Application Development Course.`,
        links: [
          {
            text: 'GitHub',
            url: 'https://github.com/ukayaj620/flu-tictactoe'
          },
        ]
      },
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
        tech: 'Node JS, Express JS, Sequelize ORM, MySQL',
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
        title: 'DIP-Tool',
        image: 'diptool',
        associated: [],
        tech: 'Lazarus IDE',
        team: 'Jason A.',
        description: `DIP-Tools is a desktop application build using Lazarus IDE. 
        This is one of my Mid Term Project for the Digital Image Processing Course at Bunda Mulia University. 
        The feature included in this application is Binarization, Grayscaling, Brightness and 
        Contrast control, Smoothing, Sharpening, and Sketching an image.`,
        links: [
          {
            text: 'GitHub Repo',
            url: 'https://github.com/ukayaj620/dip-tools'
          },
        ]
      },
      {
        title: 'RestUp PHP Framework',
        image: 'restup',
        associated: [
          {
            text: 'Codenitiva',
            url: 'https://codenitiva.netlify.app/'
          },
        ],
        tech: 'PHP, Open CLI Framework(oclif)',
        team: '',
        description: `RESTUp PHP is a small light-weight PHP framework that can be used to 
        develop maintainable and scalable REST APIs. RESTUp PHP also comes along with a CLI 
        that will surely make developing APIs with PHP never be the same again. The framework 
        and the CLI are open-sourced on Github. Any contributions are open.`,
        links: [
          {
            text: 'CLI',
            url: 'https://github.com/codenitiva/restup-cli',
          },
          {
            text: 'GitHub',
            url: 'https://github.com/codenitiva/restup-php',
          }
        ]
      },
      {
        title: 'Codenitiva Website',
        image: 'codenitiva',
        associated: [
          {
            text: 'Codenitiva',
            url: 'https://codenitiva.netlify.app/'
          },
        ],
        tech: 'React JS, TailwindCSS',
        team: 'Andrew C., Tommy S.',
        description: `Codenitiva is a place where everyone can learn, share, and 
        code with others that have the same passion and will to bring a better future 
        for technology and education growth. This is the official website of Codenitiva.`,
        links: [
          {
            text: 'GitHub',
            url: 'https://github.com/codenitiva/codenitiva-website',
          },
          {
            text: 'Website',
            url: 'https://codenitiva.netlify.app/',
          }
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
        tech: 'React JS, React Native, Node JS, Express JS',
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