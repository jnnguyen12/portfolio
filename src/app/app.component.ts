import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faBehance, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faEnvelope, faDownload, faHouse, faUser, faTerminal, faPalette, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { Project } from './interfaces/project';
import * as _projects from '../assets/jsons/projects.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faLinkedin = faLinkedinIn;
  faBehance = faBehance;
  faGithub = faGithub;
  faChevronRight = faChevronRight;
  faEnvelope = faEnvelope;
  faDownload = faDownload;

  title = 'personalSite';

  currentLang?: string;
  currentDescription?: string;
  
  navlinks: IconProp[] = [
    faHouse, faUser, faTerminal, faPalette, faSuitcase
  ];
  

  langs:string[] = [
    'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C#', "HTML5", 'SCSS', "Razor"
  ];

  frameworks:string[] = [
    '.NET Core', 'Bootstrap', 'Angular', 'Volley', 'Jest', 'MySQL',  'Pandas', 'Seaborn', 'Tensorflow'
  ];

  tools:string[] = [
    'Figma', 'Umbraco CMS', 'Postman', 'Intuiface', 'Adobe Photoshop', 'Adobe Illustrator', 'Agile', 'Git', 'Azure DevOps'
  ];

  desc:{[key:string]: string} = {
    "C": "I got to learn C in my COMS327 class where we have to implement a Pokémon game, using NCurses and applicable data structures. I used C for the first part of the application, where most of the logic was developed.",
    "C++": "I got to learn C++ in my COMS327 class where we have to implement a Pokémon game, using NCurses and applicable data structures. I used C++ for the second half of the application, where a lot more front end components were tuned on.",
    "Java": "I have worked with Java for most of my projects in my Android Development class COMS309 - a spin off from Candy Land mobile game - and in COMS472 in an application on helping an AI play Tic Tac Toe basing on AIMA's github code. Aside from that, I used Java the most for Test Driven Development.",
    "JavaScript": "I have learned JavaScript in my COMS319 Web Development class. In this class, we developed a top-down hand-drawn bullet hell game, including a duck and onions for enemies.",
    "TypeScript": "I had the opportunity to learn Angular and TypeScript during a programming challenge for my current internship at RDI. After that, I used this knowledge to try to develop a weather app during Hackathon Spring 2023",
    "SQL": "I have experience with SQL on creating databases from datasheets in my Database Management class. In which, I used MySQL Workbench and Neo4j.",
    "C#": "I got an opportunity to work with C# and Razor during my internship at RDI, as a functioning language for Umbraco CMS, in both back-end and front-end functions, along with test code.",
    "HTML5": "I have had more experience in front-end web development since my COMS319 class, and had used it for a lot of applications since then, including Quackpocalypse (using pure JS), the Weather App (Angular and TS), and websites using Umbraco CMS at my RDI internship.",
    "SCSS": "I had learned CSS from COMS319 and in the Weather App along with the websites at my RDI internship. I started learning Sass then for Bootstrap and this website! :)",
    "Razor": "I got to work with Razor as a backend language for Umbraco CMS during my internship at RDI.",
  }

  onSelect(lang:string):void {
    this.currentLang = lang;
    this.currentDescription = this.desc[lang];
  }

  onDeselect():void {
    this.currentDescription = 'Hover over a tab to display information!';
  }


}
