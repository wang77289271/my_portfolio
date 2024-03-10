import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitImage2,
  chromecast,
  disc02,
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
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  design_bg_1,
  design_bg_2,
  design_bg_3,
  design_bg_4,
  design_bg_5,
  design_bg_6,
  design_bg_7,
} from '../assets'

export const navigation = [
  {
    id: '0',
    title: 'Features',
    url: '#features',
  },
  {
    id: '1',
    title: 'Pricing',
    url: '#pricing',
  },
  {
    id: '2',
    title: 'How to use',
    url: '#how-to-use',
  },
  {
    id: '3',
    title: 'Roadmap',
    url: '#works',
  },
  {
    id: '4',
    title: 'New account',
    url: '#signup',
    onlyMobile: true,
  },
  {
    id: '5',
    title: 'Sign in',
    url: '#login',
    onlyMobile: true,
  },
]

export const heroIcons = [homeSmile, file02, searchMd, plusSquare]

export const notificationImages = [notification4, notification3, notification2]

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo]

export const brainwaveServices = [
  'Photo generating',
  'Photo enhance',
  'Seamless Integration',
]

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
]

export const works = [
  {
    id: '0',
    title: 'Voice recognition',
    text: 'Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.',
    date: 'May 2023',
    status: 'done',
    imageUrl: roadmap1,
  },
  {
    id: '1',
    title: 'Gamification',
    text: 'Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.',
    date: 'May 2023',
    status: 'progress',
    imageUrl: roadmap2,
  },
  {
    id: '2',
    title: 'Chatbot customization',
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: 'May 2023',
    status: 'done',
    imageUrl: roadmap3,
  },
  {
    id: '3',
    title: 'Integration with APIs',
    text: 'Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.',
    date: 'May 2023',
    status: 'progress',
    imageUrl: roadmap4,
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

export const pricing = [
  {
    id: '0',
    title: 'Basic',
    description: 'AI chatbot, personalized recommendations',
    price: '0',
    features: [
      'An AI chatbot that can understand your queries',
      'Personalized recommendations based on your preferences',
      'Ability to explore the app and its features without any cost',
    ],
  },
  {
    id: '1',
    title: 'Premium',
    description: 'Advanced AI chatbot, priority support, analytics dashboard',
    price: '9.99',
    features: [
      'An advanced AI chatbot that can understand complex queries',
      'An analytics dashboard to track your conversations',
      'Priority support to solve issues quickly',
    ],
  },
  {
    id: '2',
    title: 'Enterprise',
    description: 'Custom AI chatbot, advanced analytics, dedicated account',
    price: null,
    features: [
      'An AI chatbot that can understand your queries',
      'Personalized recommendations based on your preferences',
      'Ability to explore the app and its features without any cost',
    ],
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

import { flutter, profile_2, redux, sass } from '../assets'

export const images = [flutter, profile_2, redux, sass]
export const designImages = [
  design_bg_1,
  design_bg_2,
  design_bg_3,
  design_bg_4,
  design_bg_5,
  design_bg_6,
  design_bg_7,
]
