import ReactIcon from './images/react.png';
import ResponsiveIcon from './images/responsive.png';
import CssIcon from './images/css.png';
import TddIcon from './images/tdd.png';
import JsIcon from './images/js.png';
import VueIcon from './images/vue.png';

//Store project information in a array

const ProjectInfo = [
  {id: 0, image: VueIcon, flipped: false, gitLink:'https://github.com/virgilseo/pulse',
   liveLink: 'https://pulse-planner.surge.sh/', title:'Pulse',
   tag:'Event planner app featuring select events in the city of Amsterdam',
   description:['Vue.js', 'JavaScript', 'Css', 'Html', 'Responsive Design', 'Api', 'TypeScript'] },
  {id: 1, image: VueIcon, flipped: false, gitLink:'https://gitlab.com/virgilavram.dev/ritekit-task',
   liveLink: 'https://enhancepost.surge.sh/', title:'Auto Hashtags',
   tag:'Add the best performing hashtags to your social media posts',
   description:['Vue.js', 'JavaScript', 'Css', 'Html', 'Responsive Design', 'Api', 'Tailwind.css'] },
  {id: 2, image: ReactIcon, flipped: false, gitLink:'https://github.com/virgilseo/neighborhood-map',
   liveLink: 'https://dusseldorf-places.surge.sh/', title:'Dusseldorl Places' ,
   tag:'Map based browser app that features a number of locations in Dusseldorf',
   description:['React.js', 'JavaScript', 'Css', 'Html', 'Responsive Design', 'Api'] },
  {id: 3, image: VueIcon, flipped: false, gitLink:'https://github.com/virgilseo/circuly-task',
   liveLink: 'https://github.com/virgilseo/circuly-task', title:'Client address book' ,
   tag:'User Interface for organizing your client address database',
   description:['Vue.js', 'JavaScript', 'Css', 'Html', 'Responsive Design', 'Rest api'] },
  {id: 4, image: ReactIcon, flipped: false, gitLink:'https://github.com/virgilseo/myreads',
   liveLink: 'https://virgilseo-myreads.surge.sh/', title:'My Reads' ,tag:'Browser app that allows you to search for and categorize books',
   description: ['React.js', 'JavaScript', 'Css', 'Html', 'Responsive Design'] },
  {id: 5, image: ResponsiveIcon, flipped: false, gitLink:'https://github.com/virgilseo/-mws-restaurant-reviews',
   liveLink: 'https://virgilseo-restaurantreviews.surge.sh/', title:'Restaurant Reviews' ,tag:'Restaurant reviews app featuring select venues in New York',
   description:['JavaScript', 'Css', 'Html', 'Responsive Design'] },
  {id: 6, image: JsIcon, flipped: false, gitLink:'https://github.com/virgilseo/arcade-game-clone-project',
   liveLink: 'https://virgilseo-clonegame.surge.sh', title:'Argade Game Clone' ,tag:'A modern day version of the classic arcade game Frogger',
   description:['JavaScript', 'Css', 'Html', 'OOP'] },
  {id: 7, image: TddIcon, flipped: false, gitLink:'https://github.com/virgilseo/feedreader-project',
   liveLink: 'https://github.com/virgilseo/feedreader-project', title:'Feed Reader' ,tag:'RSS feeds web app. Test driven development was implemented using Jasmine.js',
   description:['JavaScript', 'Css', 'Html', 'Jasmine.js', 'Test Driven Development'] },
  {id: 8, image: CssIcon, flipped: false, gitLink:'https://github.com/virgilseo/project-memory-game',
   liveLink: 'https://virgilseo-memorygame.surge.sh/', title:'Memory Game' ,tag:'My take on the classic memory game named Concentration',
   description:['JavaScript', 'Css', 'Html', 'Responsive Design']}
  ]

export default ProjectInfo
