import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import MediumIcon from '../components/Icon/MediumIcon';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ahmed Eltaher.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm Berlin based <strong className="text-stone-100">Software Architect</strong>, currently working
        at <strong className="text-stone-100">SAP SE</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time , you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: "https://drive.google.com/file/d/0B_WQGYZeW1-0LVo3SVJaWmFSeTA/view?usp=sharing&resourcekey=0-_ojqvvroaYv9psz-ZxfeZA",
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Energetic software architect with 15 years of experience, mainly in the full-stack development area,
   which enables me to create software that adds business value to you and makes your customer happy.`,
  aboutItems: [
    {label: 'Location', text: 'Berlin, Germany', Icon: MapIcon},
    {label: 'Age', text: '33', Icon: CalendarIcon},
    {label: 'Nationality', text: 'German / Egyptian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'University of AinShams', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'SAP SE.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'German',
        level: 4,
      },
      {
        name: 'Arabic',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Kotlin',
        level: 7,
      },
      {
        name: 'Python',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java Springboot',
        level: 8,
      },
      {
        name: 'Python Django Framework',
        level: 5,
      },
      {
        name: 'DB technologies(SQL/NoSQL)PostgreSQL, MySQL, Cassandra',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Android Development (Java, Kotlin)',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'SAP Ariba Shopping',
    description: 'The SAP Ariba Shopping mobile app for iOS offers you a personalized, intuitive and sustainable shopping experience anywhere, anytime. The app connects you to SAP Ariba and lets you easily make purchases using your Apple iPhone.',
    url: 'https://apps.apple.com/de/app/sap-ariba-shopping/id1593253867',
    image: porfolioImage1,
  },
  {
    title: 'momox fashion - Second Hand',
    description: 'With momox fashion you can buy used clothing for every taste in the best quality without any stress.With the app you can easily browse through all the departments that a good online store has to offer. Look forward to a huge selection of pre-owned clothes.',
    url: 'https://apps.apple.com/de/app/momox-fashion-second-hand/id1508997269',
    image: porfolioImage2,
  },
  {
    title: 'momox: Selling second hand',
    description: "Selling on momox is now even easier! Whether it's books & media or clothing & accessories, from now on you can sell everything in just one app!MOMOX MAKES YOU SPACE! Grab your used items and give them a new home! The nicest, easiest and most sustainable way to get rid of your things - sell now with momox.",
    url: 'https://apps.apple.com/de/app/momox-second-hand-verkaufen/id414543719',
    image: porfolioImage3,
  },
  {
    title: 'AUTO1.com',
    description: "AUTO1.com is the leading online marketplace for the efficient purchase and sale of tested vehicles. As an independent and cross-brand automotive wholesaler, AUTO1.com is aimed exclusively at commercial retailers.With a verified vehicle inventory of over 40,000 vehicles and over 3,000 new arrivals every day, you as a dealer can find the right vehicle for your individual used car program - always at market-based purchasing conditions. More than 45,000 partner dealers from over 30 countries already use AUTO1.com as a reliable purchasing source for their used car business. With the free AUTO1.com app, partner dealers have the opportunity to purchase comprehensively documented vehicles at attractive conditions directly from AUTO1.com throughout Europe with just a few clicks: 24 hours a day, 7 days a week - with no hidden fees, brokerage commissions or minimum purchase quantities. Partner dealers can use the AUTO1.com app to participate in all ongoing auctions and place bids in real time. As a dealer, you can also conveniently purchase vehicles directly at a fixed price via our Buy It Now section.",
    url: 'https://apps.apple.com/de/app/auto1-com/id1064015230',
    image: porfolioImage4,
  },
  {
    title: 'AUTO1 EVA App',
    description: "AUTO1 EVA enables you to offer vehicles to over 60,000 dealers in more than 30 countries. Benefit from competitive prices across Europe while we remain your sole contract, service, and contact partner. AUTO1.com handles the entire marketing and processing, including payment, transportation, and export handling. Evaluate a vehicle in under 15 minutes with our intuitive app and list it for sale in a 24-hour auction to our extensive network of partner dealers.",
    url: 'https://apps.apple.com/de/app/auto1-eva-app/id1504637176',
    image: porfolioImage5,
 },
  {
    title: 'MeinVodafone / AnaVodafone (10+ million installations)',
    description: "MeinVodafone is self-care mobile application, I participated in developing the REST APIs using Java Springboot and worked on the mobile app.",
    url: 'https://apps.apple.com/de/app/meinvodafone/id398195347',
    image: porfolioImage6,
  },
  {
    title: 'mySTC KSA (5+ million installations)',
    description: 'mySTC app is Self-care mobile application, I participated in developing the REST APIs using Java Springboot and worked on the Android app.',
    url: 'https://apps.apple.com/de/app/mystc-ksa/id808807355',
    image: porfolioImage7,
  },
  {
    title: 'Kotobi',
    description: 'Kotobi is considered the first Arabic E-reader App. I participated in the Android app and the Rest APIs using Java Springboot.',
    url: 'https://play.google.com/store/apps/details?id=com.vis.kotob&hl=en&pli=1',
    image: porfolioImage8,
  },
  {
    title: 'BLE Electrometer Charging SDK',
    description: "BLE Electrometer Charging SDK aims to recharge the smart electrometers via mobile phones, I developed the Android app in Kotlin & The Rest APIs in Java Spring Boot.",
    url: 'https://apps.apple.com/de/app/ecg-powerapp/id1398352884',
    image: porfolioImage9,
  },
  {
    title: 'Makan SDK (RTLS SDK)',
    description: "A Real-time Locating Systems SDK, which enables companies to develop their indoor maps mobile apps, I developed the Android app in Kotlin & The Rest APIs in Python Django.",
    url: 'https://play.google.com/store/apps/details?id=place.where.atmalls',
    image: porfolioImage10,
  },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2007- June 2011',
    location: 'Cairo, Egypt',
    title: 'Bsc Computers & information science, Ain Shams University',
    content: <p>I've studied my bachelor in Faculty of Computers & information science Ain Shams university.<br />
    I have studied a lot of topics such as:<br />
    •Computer vision<br />
    •Image processing<br />
    •Pattern recognition <br />
    •Artificial intelligence<br />
    •Machine learning<br />
    •Data mining<br />
    •Natural language processing<br />
    •Robotics<br />
    •Analysis of algorithms <br />
    •Algorithms <br />
    •Data structures <br />
    •Combinatorial optimization <br />
    •Computational geometry<br />
    •Digital logic<br />
    •Microarchitecture<br />
    •Multiprocessing<br />
    •Systems architecture <br />
    •Operating systems<br />
    •Computational physics <br />
    •Computational chemistry <br />
    •Bioinformatics.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jun 2021 - present',
    location: 'SAP SE, Berlin',
    title: 'Software Architect',
    content: (
      <p>
• Evaluating, identifying, and developing software solutions<br />
• Leading software development projects<br />
• Documenting and recording every aspect of an application or software<br />
• Training and overseeing the activities of the members of the development team<br />
• Planning, tracking and scheduling software deliverables<br />
• Locating and directing solutions for critical challenges involving software and hardware interface<br />
• Looking for problems within software systems and resolving the issues<br />
• Developing good working relationships with other employees, such as Marketing Managers, Product Managers, Programmers and Engineers<br />
      </p>
    ),
  },
  {
    date: 'Apr 2017 - Mar 2021 · 4 yrs',
    location: 'momox GmbH, Berlin',
    title: 'Mobile Tech Lead',
    content: (
      <p>
• Creating a diverse and outstanding team.<br />
• Lead the mobile team from a technical perspective, mentor team members.<br />
• Keep the Android tech stack up to date, test the new technologies, and how they fit into the business and apps.<br />
• Set up the Android Environment from scratch (Git repositories, CI/CD pipeline integration).<br />
• Participate in the hiring process / technical interview process.<br />
• Design and build advanced applications for the Android platform.<br />
• Setting up migrations / refactoring plans.<br />
• Maintain and improve our build and distribution automation tools.<br />
• Optimize the performance for low-end devices.<br />
• Design and build advanced applications for the Android platform.<br />
• Collaborate with back-end developers, designers, product owners to constantly improve the customer experience within our apps.<br />
• Work with outside data sources and API.<br />
• Write and maintain unit tests as well as the UI-Tests framework for robustness, including edge cases, usability, and general reliability.<br />
• Work on bug fixing and improving application performance.<br />
• Refactor old code to make it updated according to the latest APIs, refine the performance for new android versions.<br />
• Continuously discover, evaluate, and implement new technologies to maximize development efficiency.<br />
• Migrate Java code to Kotlin.<br />
• Optimize UI for performance for low-end devices.<br />
• Monitor and understand customer behavior.<br />
• Solve technical and behavioral challenges, prioritized based on customer impact.<br />
• Build reusable Android components/SDKs for interfacing with the multiple entities and Apps in our platforms.<br />
      </p>
    ),
  },
  {
    date: 'Dec 2015 - Mar 2017 · 1 yr 4 mos',
    location: 'Auto1, Berlin',
    title: 'Senior Mobile Engineer',
    content: (
      <p>
•Proudly I was part of the initial mobile team in Auto1 and I participated to build the mobile team from scratch.<br />
•Responsible for technical interview assessment for new applicants.<br />
•Build the Android team.<br />
•Setup the Android Environment from scratch (Git repositories, CI/CD pipeline integration).<br />
•Design and build advanced applications for the Android platform.<br />
•Collaborate with other teams to define, design, and ship new features.<br />
•Work with outside data sources and APIs.<br />
•Unit-test code for robustness, including edge cases, usability, and general reliability.<br />
•Work on bug fixing and improving application performance.<br />
•Continuously discover, evaluate, and implement new technologies to maximize development efficiency.<br />
      </p>
    ),
  },{
    date: 'Dec 2015 - Mar 2017 · 1 yr 4 mos',
    location: 'Vodafone International Services (VIS), Cairo',
    title: 'Senior Software Engineer',
    content: (
      <p>
•Proudly I was part of the initial mobile team in Auto1 and I participated to build the mobile team from scratch.<br />
•Responsible for technical interview assessment for new applicants.<br />
•Build the Android team.<br />
•Setup the Android Environment from scratch (Git repositories, CI/CD pipeline integration).<br />
•Design and build advanced applications for the Android platform.<br />
•Collaborate with other teams to define, design, and ship new features.<br />
•Work with outside data sources and APIs.<br />
•Unit-test code for robustness, including edge cases, usability, and general reliability.<br />
•Work on bug fixing and improving application performance.<br />
•Continuously discover, evaluate, and implement new technologies to maximize development efficiency.<br />
      </p>
    ),
  },{
    date: 'Jun 2011 - May 2013 · 2 yrs',
    location: 'NTG Clarity, Cairo',
    title: 'Back End Developer',
    content: (
      <p>
•Design and build advanced REST APIs.<br />
•Collaborate with other teams to define, design, and ship new features.<br />
•Work with outside data sources and API's.<br />
•Unit-test code for robustness, including edge cases, usability, and general reliability.<br />
•Work on bug fixing and improving application performance.<br />
•Continuously discover, evaluate, and implement new technologies to maximize development efficiency.<br />
• Designs/codes applications following specifications using the appropriate and latest version of the tools such as Eclipse and Android SDK.<br />
• Develop complex applications and modifies/Perform maintenance programming for existing versions on his own.<br />
• Writing the code in a way of keeping separate tiers and keeping the Minimum size of files.<br />
• Produce quality deliverables in a fast-paced environment.<br />
• Provide estimates for assigned development tasks.<br />
• Learn and evaluate other new technologies/tools as needed.<br />
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Matthias Pape',
      text: 'Ahmed is a high professional, friendly and very good team player. It was a pleasure to work with him! He has amazing skills and passionate about sharing his knowlege with his team.',
      image: 'react-resume-template/src/components/Icon/personIcon.tsx',
    },
    {
      name: 'Mohamed Elmaazy',
      text: "I had the pleasure of studying android track under instructing Ahmed Eltaher , He is hard worker , patient , Confident ,Positive thinker , innovator , have excellent technical knowledge ,learn me how to think in my own business",
      image: 'react-resume-template/src/components/Icon/personIcon.tsx',
    },
    {
      name: 'Islam Mansour',
      text: 'Ahmed is very active person, really a hard worker, very ambitious and he like what he is doing ',
      image: 'react-resume-template/src/components/Icon/personIcon.tsx',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'ahmedmahmoud.eltaher@gmail.com',
      href: 'mailto:ahmedmahmoud.eltaher@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Berlin, Germany',
      href: 'https://maps.app.goo.gl/EGE4smtvE6eEMgz9A',
    },
    {
      type: ContactType.Phone,
      text: '+4915154346438',
      href: ' https://wa.me/+4915154346438',
    },
    {
      type: ContactType.LinkedIn,
      text: '@ahmed-eltaher',
      href: 'https://www.linkedin.com/in/ahmed-eltaher/',
    },
    {
      type: ContactType.Github,
      text: 'ahmedeltaher',
      href: 'https://github.com/ahmedeltaher',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ahmed-eltaher/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ahmedeltaher'},
  {label: 'Medium', Icon: MediumIcon, href: 'https://medium.com/@ahmedmahmoud-eltaher'},
];
