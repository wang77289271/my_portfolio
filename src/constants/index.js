import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitImage2,
  discordBlack,
  facebook,
  figma,
  framer,
  cms,
  photoshop,
  tailwind,
  illustractor,
  materialui,
  docker,
  node,
  javascript,
  typescript,
  git,
  reacticon,
  jest,
  restapi,
  file02,
  homeSmile,
  instagram,
  plusSquare,
  // roadmap1,
  // roadmap2,
  // roadmap3,
  // roadmap4,
  searchMd,
  telegram,
  twitter,
  design_bg_1,
  design_bg_2,
  design_bg_3,
  design_bg_4,
  design_bg_5,
  design_bg_6,
  design_bg_7,
  costumagic,
  bollywood,
  jurassic,
  korked,
  profile_3,
  nextjs,
  sass,
  ts_header,
  pricespy_cover,
  ai_summarize_cover,
  weather_cover,
  pricespy_feature_img_1,
  portfolio_feature,
  ai_summarize_feature_1,
} from '../assets'

export const navigation = [
  {
    id: '0',
    title: 'Home',
    url: '#',
    onlyMobile: false,
  },
  {
    id: '1',
    title: 'About',
    url: '#about',
    onlyMobile: false,
  },
  {
    id: '2',
    title: 'Skills',
    url: '#skills',
    onlyMobile: false,
  },
  {
    id: '3',
    title: 'Works',
    url: '#works',
    onlyMobile: false,
  },
  {
    id: '4',
    title: 'Design',
    url: '#design',
    onlyMobile: false,
  },
  {
    id: '5',
    title: 'contact',
    url: '#contact',
    onlyMobile: true,
  },
]

export const projectNavigation = [
  {
    id: '0',
    title: '< Back Home',
    url: '/',
    onlyMobile: false,
  },
  {
    id: '1',
    title: 'Top',
    url: '#desginHero',
    onlyMobile: false,
  },
  {
    id: '2',
    title: 'Details',
    url: '#project-intro',
    onlyMobile: false,
  },
  {
    id: '5',
    title: 'contact',
    url: '#contact',
    onlyMobile: true,
  },
]

export const designNavigation = [
  {
    id: '0',
    title: '< Back Home',
    url: '/',
    onlyMobile: false,
  },
  {
    id: '1',
    title: 'Top',
    url: '#desginHero',
    onlyMobile: false,
  },
  {
    id: '2',
    title: 'Designs',
    url: '#designDemos',
    onlyMobile: false,
  },
  {
    id: '5',
    title: 'contact',
    url: '#contact',
    onlyMobile: true,
  },
]

export const headerTitles = [
  { id: 0, title: 'Web Developer' },
  { id: 1, title: 'UX/UI Designer' },
  { id: 2, title: 'Freelancer' },
]

export const heroIcons = [homeSmile, file02, searchMd, plusSquare]

export const works = [
  {
    id: 'price-spy',
    title: 'Price-spy',
    text: 'Discover Amazon Price Scraping: using data extraction techniques for scraping product details, tracking prices, and automating notifications.',
    desc: "Crafted on the foundation of Next.js and empowered by Bright Data's webunlocker, this robust e-commerce product scraping platform revolutionizes the way users navigate online markets. Seamlessly integrated, it diligently monitors price fluctuations, ensuring users are promptly notified of advantageous price drops. Moreover, it extends its utility to competitors by promptly alerting them to product stock-outs, all orchestrated effortlessly through the precision of cron jobs.",
    name: 'Price spy',
    tags: [
      'Next.js',
      'Bright Data',
      'Cheerio',
      'TypeScript',
      'NodeMailer',
      'MongoDB',
      'API',
      'Tailwind CSS',
    ],
    urls: [
      {
        name: 'View Demo',
        url: 'https://pricespy-five.vercel.app/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/wang77289271/pricespy',
      },
    ],
    features: [
      {
        name: 'Automated Product Tracking',
        content:
          'Stay ahead of the competition by receiving real-time alerts when products drop in price or go out of stock. Our automated tracking system ensures that you never miss a deal or opportunity to capitalize on market trends.',
      },
      {
        name: 'Intuitive User Interface',
        content:
          'Enjoy a seamless user experience with our user-friendly interface, designed to make it easy to input product links and track pricing trends. Our intuitive design ensures that users of all levels can navigate the application with ease.',
      },
      {
        name: 'Flexible Data Analysis',
        content:
          'Access detailed insights into product details, pricing trends, and historical data. Our flexible data analysis tools empower users to make informed purchasing decisions and gain a competitive edge in the market.',
      },
    ],
    status: 'done',
    imageUrl: pricespy_cover,
    featureImg: pricespy_feature_img_1,
  },
  {
    id: 'ai-summarize',
    title: 'AI Summarizer',
    text: 'Simplify reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.',
    desc: "Discover a revolutionary tool for simplifying the process of summarizing lengthy articles into concise and digestible summaries with just one click. Whether you're a student looking to quickly extract key information from research papers or a busy professional trying to stay informed, the application has you covered.",
    name: 'AI Summarizer',
    tags: ['React.js', 'Typescript', 'Redux Toolkit', 'Tailwind CSS', 'API'],
    urls: [
      {
        name: 'View Demo',
        url: '#',
      },
      {
        name: 'GitHub',
        url: '#',
      },
    ],
    features: [
      {
        name: 'Summary Generation',
        content:
          'Easily generate summaries for any kind of article by simply inputting the URL into our web app. Our powerful AI model leverages advanced natural language processing techniques to provide accurate and coherent summaries that capture the essence of the original content.',
      },
      {
        name: 'History Saving with Local Storage',
        content:
          'Keep track of your summarization history with our built-in history feature. Save summaries locally to revisit and manage your reading history conveniently, ensuring that you never lose track of important information.',
      },
      {
        name: 'Advanced RTK Query API Requests',
        content:
          'Harness the advanced capabilities of Redux Toolkit (RTK) Query for making API requests. Our application utilizes RTK Query to fire API requests conditionally based on specific criteria, optimizing data fetching and management for a seamless user experience.',
      },
    ],
    status: 'done',
    imageUrl: ai_summarize_feature_1,
    adjuestImgSize: 'w-[80%] py-12',
    featureImg: ai_summarize_cover,
  },
  {
    id: 'weather-forecast',
    title: 'Weather Forecast',
    text: 'This Weather App is built with React and allows users to get current location weather, search for weather by location, and view weather forecasts.',
    desc: 'This weather application is a React-based application designed to provide users with easy access to weather information. Whether you want to check the current weather in your location, look up weather forecasts for specific cities, or plan ahead for outdoor activities, our app has you covered.',
    name: 'Weather Forecast',
    tags: [
      'React.js',
      'API Integration',
      'OpenWeatherMap API',
      'GeoDB Cities API',
      'JavaScript (ES6+)',
      'Sass',
      'Figma',
    ],
    urls: [
      {
        name: 'View Demo',
        url: 'https://ye-weather-forecast.netlify.app/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/wang77289271/weather_app',
      },
    ],
    features: [
      {
        name: 'Get Current Location Weather',
        content:
          "Upon opening the app, users are prompted to allow access to their current location. The app fetches the current weather conditions based on the user's geographical coordinates.",
      },
      {
        name: 'Search Location',
        content:
          'Users can search for weather information in any location by typing the city name or zip code into the search bar. The app retrieves the weather data for the specified location.',
      },
      {
        name: 'Weather Forecast',
        content:
          'The app provides a weather forecast for the upcoming days, allowing users to plan ahead and stay informed about changes in weather conditions.',
      },
    ],
    status: 'done',
    imageUrl: weather_cover,
    featureImg: weather_cover,
  },
  {
    id: 'portfolio',
    title: 'My Portfolio',
    text: 'Embark on a journey through my digital realm with my personal portfolio website. Crafted with passion and precision, this website serves as a showcase of my skills, projects, and accomplishments of web development and design.',
    desc: 'Discover my meticulously crafted portfolio website, featuring a responsive layout and a modern, professional design. This platform serves as a showcase of my skills, projects, and achievements in web development and design. Explore with ease, delve into project showcases, and witness the culmination of my passion for creating impactful digital experiences.',
    name: 'portfolio',
    tags: [
      'React.js',
      'JavaScript (ES6+)',
      'Framer Motion',
      'Tailwind CSS',
      'React Router',
    ],
    urls: [
      {
        name: 'View Demo',
        url: 'https://pricespy-five.vercel.app/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/wang77289271/pricespy',
      },
    ],
    features: [
      {
        name: 'Sleek and Professional Design',
        content:
          'Immerse yourself in the sleek and professional design of my portfolio website, reflecting my commitment to excellence in web development and design.',
      },
      {
        name: 'Responsive Layout',
        content:
          'Enjoy a seamless browsing experience across devices with a responsive website layout that adapts to desktops, tablets, and smartphones',
      },
      {
        name: 'Project Showcase',
        content:
          'Explore a curated collection of my projects, each accompanied by detailed descriptions, screenshots, and links to live demos or GitHub repositories.',
      },
    ],
    status: 'progress',
    imageUrl: profile_3,
    featureImg: portfolio_feature,
  },
]

export const collabContent = [
  {
    id: '0',
    title: 'Adaptable Web Skills',
    text: 'I deliver efficient and innovative web solutions with proficiency in HTML, CSS, JavaScript, React, Node.js, RESTful API development, Git, and agile methodologies.',
    desc: 'My integrated approach promotes effective collaboration, agile project coordination, and dynamic web solutions that adapt to evolving user and business needs',
  },
  {
    id: '1',
    title: 'Intuitive UX/UI Design',
    text: 'With expertise in Figma, Adobe, and frameworks like Tailwind CSS, Sass, and Material-UI, I craft captivating and functional user experiences and interfaces.',
    desc: 'My design process focuses on creating seamless interactions, intuitive navigation, and visually appealing interfaces that enhance user satisfaction and drive engagement.',
  },
]

export const webSkills = [
  {
    id: '0',
    title: 'JavaScript',
    icon: javascript,
    width: 26,
    height: 36,
  },
  {
    id: '1',
    title: 'React',
    icon: reacticon,
    width: 34,
    height: 36,
  },
  {
    id: '2',
    title: 'Git',
    icon: git,
    width: 36,
    height: 28,
  },
  {
    id: '3',
    title: 'TypeScript',
    icon: typescript,
    width: 34,
    height: 35,
  },
  {
    id: '4',
    title: 'Jest',
    icon: jest,
    width: 34,
    height: 34,
  },
  {
    id: '5',
    title: 'RESTful API',
    icon: restapi,
    width: 34,
    height: 34,
  },
  {
    id: '6',
    title: 'Node',
    icon: node,
    width: 26,
    height: 34,
  },
  {
    id: '7',
    title: 'Docker',
    icon: docker,
    width: 26,
    height: 34,
  },
]
export const uiSkills = [
  {
    id: '0',
    title: 'Figma',
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: '1',
    title: 'Framer',
    icon: framer,
    width: 34,
    height: 36,
  },
  {
    id: '2',
    title: 'PhotoShop',
    icon: photoshop,
    width: 36,
    height: 28,
  },
  {
    id: '3',
    title: 'CMS',
    icon: cms,
    width: 34,
    height: 35,
  },
  {
    id: '4',
    title: 'Tailwind',
    icon: tailwind,
    width: 34,
    height: 34,
  },
  {
    id: '5',
    title: 'Sass',
    icon: sass,
    width: 34,
    height: 34,
  },
  {
    id: '6',
    title: 'Illustractor',
    icon: illustractor,
    width: 26,
    height: 34,
  },
  {
    id: '7',
    title: 'Material-Ui',
    icon: materialui,
    width: 26,
    height: 34,
  },
]

export const abouts = [
  {
    id: '0',
    title: 'Web Development',
    text: 'As a web developer, I craft user-focused digital experiences with expertise in responsive web technologies.',
    backgroundUrl: './src/assets/benefits/card-1.svg',
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: '1',
    title: 'UX/UI',
    text: 'UX/UI design is about creating intuitive and visually appealing digital interfaces. I blend user insights with modern design principles to craft seamless and delightful experiences.',
    backgroundUrl: './src/assets/benefits/card-2.svg',
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: '2',
    title: 'Responsive Design',
    text: 'Responsive design ensures optimal user experiences across devices. Using flexible layouts and media queries, I create websites that adapt beautifully to any screen size.',
    backgroundUrl: './src/assets/benefits/card-3.svg',
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
]

export const socials = [
  {
    id: '0',
    title: 'Discord',
    iconUrl: discordBlack,
    url: '#',
  },
  {
    id: '1',
    title: 'Twitter',
    iconUrl: twitter,
    url: '#',
  },
  {
    id: '2',
    title: 'Instagram',
    iconUrl: instagram,
    url: '#',
  },
  {
    id: '3',
    title: 'Telegram',
    iconUrl: telegram,
    url: '#',
  },
  {
    id: '4',
    title: 'Facebook',
    iconUrl: facebook,
    url: '#',
  },
]

export const images = [tailwind, profile_3, nextjs, ts_header]

export const designRotateImages = [
  {
    top: [
      {
        id: 0,
        image: design_bg_1,
        size: 'w-[44%]',
        alt: 'poster 1',
      },
    ],
    mid: [
      { id: 1, image: design_bg_2, size: 'w-[28%]', alt: 'poster 2' },
      { id: 2, image: design_bg_3, size: 'w-[10%]', alt: 'poster 3' },
      { id: 3, image: design_bg_4, size: 'w-[28%]', alt: 'poster 4' },
      { id: 4, image: design_bg_5, size: 'w-[10%]', alt: 'poster 5' },
      { id: 5, image: design_bg_7, size: 'w-[28%]', alt: 'poster 6' },
    ],
    bottom: [
      {
        id: 6,
        image: design_bg_6,
        size: 'w-[44%]',
        alt: 'poster 7',
      },
    ],
  },
]

export const designWebsites = [
  {
    id: 0,
    title: 'Bollywood Star Canada',
    desc: 'Experience the vibrant world of Bollywood dance with Karima Essa, a three-time Canadian National Dance champion, available for workshops, performances, and dance lessons through Pebble Star Artists Inc.',
    url: 'https://www.bollywoodstarcanada.com/',
    image: bollywood,
  },
  {
    id: 1,
    title: 'Korked U-Vin',
    desc: 'Designed and developed ecommerce and shopping pages for Korked U-Vin, a Premium Estate wine making u-bottle facility and retail supply store, pioneering Ferment on Premise in Alberta.',
    url: 'https://www.korkeduvin.com/store-private-reserve',
    image: korked,
  },
  {
    id: 2,
    title: 'Jurassic Mechanical Plumbing & Heating',
    desc: 'Built the website for Jurassic Mechanical Plumbing & Heating Ltd., a company founded on quality service, integrity, and genuine client relationships.',
    url: 'https://www.jurassicmechanical.com/',
    image: jurassic,
  },
  {
    id: 3,
    title: 'Costumagic',
    desc: 'Built the website for Costumagic, your destination for custom costumes tailored to elevate your performance, whether it is for dance or cosplay.',
    url: 'https://www.costumagic.ca/',
    image: costumagic,
  },
  {
    id: 4,
    title: 'Comming soon...',
    desc: 'Ongoing projects. Projects I am still working on like Axial Vertical farming, 67supply, etc. Check out later!',
    url: false,
    image: false,
  },
]

export const gradientStyle = {
  color: '#9820e3',
  backgroundImage: '-webkit-linear-gradient(0deg, #9820e3 0%, #ffc107 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  textFillColor: 'transparent',
  WebkitTextFillColor: 'transparent',
}
