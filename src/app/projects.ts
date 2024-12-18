import {Project} from './interfaces/interfaces';

const imgPath = '../assets/img/';

export const PROJECTS: Project[] = [
  {
    imgSrc: imgPath + 'recipe.png',
    name: 'NLP recipe importer with calorie calculator and real time cooking assistance',
    date: 'Current',
    medium: 'React Native',
    place: 'Side project',
    desc: 'Like the title said, the app will have NLP importer, real time cooking assistance, ingredients unit converter, and calorie calculation with the help of AI. It is a work in progress.',
    buttonList: [],
    skills: ['React Native', 'Figma', 'NLP'],
    platforms: ['Android', 'iOS'],
  },
  {
    imgSrc: imgPath + 'CoralAI.png',
    name: 'Coral AI Figma design',
    date: 'Dec 2024',
    medium: 'Figma',
    place: 'Side project',
    desc: 'A request I made for a friend to create an interface for their AI chatbot.',
    buttonList: [],
    skills: ['Figma'],
    platforms: ['Web'],
  },
  {
    imgSrc: imgPath + 'dog_breeds.png',
    name: 'Dog Breeds Information',
    date: 'Dec 2024',
    medium: 'React',
    place: 'Side project',
    desc: 'A small, for funsies project that involves public API calls and querying for dog breeds names to display its information.',
    buttonList: [],
    skills: ['React', 'TypeScript', 'Bootstrap', 'Figma'],
    platforms: ['Web'],
  },
  {
    imgSrc: imgPath + 'data_collection.png',
    name: 'Data Collection app',
    date: 'Nov 2024',
    medium: '.NET MAUI',
    place: 'MobileDemand',
    desc: 'The data collection app that I had the opportunity to design and develop during my time at MobileDemand.',
    buttonList: [],
    skills: ['.NET MAUI', 'ASP.NET', 'WPF', 'Bluetooth Low Energy', 'XML', 'Figma'],
    platforms: ['Android', 'iOS'],
  },
  {
    imgSrc: '',
    name: 'My personal portfolio',
    date: 'Current',
    medium: 'Angular project',
    place: '(this website!)',
    desc: 'My first complete personal project, which I have had a ton of fun making, using all the experimental/ learned CSS knowledge I possess.',
    buttonList: [],
    skills: ['Bootstrap', 'HTML', 'CSS', 'Angular', 'TypeScript', 'Figma'],
    platforms: ['Web'],
  },
  {
    imgSrc: imgPath + 'splash.png',
    name: 'Hotel Splash Screen',
    date: 'Nov 2023',
    medium: 'Umbraco CMS',
    place: 'RDI / Thinix',
    desc: 'A system of hotel kiosk and WiFi splash screen made with Umbraco CMS, C#, and Bootstrap during my internship at RDI.',
    buttonList: [
      {
        type: 'Behance',
        link: 'https://www.behance.net/gallery/186292747/WiFi-Splash-Screen',
      },
    ],
    skills: ['Bootstrap', 'HTML', 'CSS', 'C#', 'ASP.NET', 'Figma'],
    platforms: ['Web'],
  },
  {
    imgSrc: imgPath + 'map.png',
    name: 'Inflight Entertainment Map',
    date: 'Fall 2023',
    medium: 'React JS, Bootstrap',
    place: 'Senior Design Project',
    desc: "My senior design group project of a resizable, movable and offline functional inflight map with flight information made using React, TypeScript and Python for backend. The map is a separate component and can be used on top of other cient's application. I was in charge with the front-end and 100% of its UX/UI.",
    buttonList: [
      {
        type: 'Behance',
        link: 'https://www.behance.net/gallery/187135255/Inflight-Entertainment-Map',
      },
      {
        type: 'Github',
        link: 'https://github.com/jnnguyen12/Inflight-Entertainment-Map',
      },
    ],
    skills: ['React', 'TypeScript', 'Bootstrap', 'HTML', 'CSS', 'Figma'],
    platforms: ['Web'],
  },
  {
    imgSrc: imgPath + 'thinix.png',
    name: 'Thinix Company Website',
    date: 'Summer 2023',
    medium: 'Umbraco CMS',
    place: 'RDI / Thinix',
    desc: 'This website among 7 sites belongs to the company that I worked for during Summer 2023. It was a redesign and update of the whole 7 multi-site using Umbraco CMS, in which I was head front-end and 90% of the UX/UI decision. I wrote macros and created the layout for all the components, using Razor, C# in cshtml. ',
    buttonList: [{type: 'Thinix Website', link: 'https://thinix.com'}],
    skills: ['Bootstrap', 'HTML', 'CSS', 'C#', 'ASP.NET', 'Figma'],
    platforms: ['Web'],
  },
  {
    imgSrc: imgPath + 'pokemon.png',
    name: 'Pokemon COMS327 Project',
    date: 'Fall 2022',
    medium: 'C, C++, ASCII',
    place: 'COMS327 at ISU',
    desc: 'An ASCII art class project for a rendition of the classic pokemon franchise, in C and C++.',
    buttonList: [
      {type: 'Github', link: 'https://github.com/jnnguyen12/COMS327pokemon'},
    ],
    skills: ['C++', 'C', 'ASCII Art'],
    platforms: ['Linux'],
  },
];
