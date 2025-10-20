// gitprofile.config.ts
const USERNAME = 'tonyrex99';
const EXCLUDED_PROJECTS = [
  USERNAME,
  `CEN-524-assignments`,
  `SQLite3`,
  `pwa-builder`,
  `alx-pre_course`,
  `legendary-journey`,
  `alx-zero_day`,
  `vercel-github-readme-stats`,
  `SQLite3`,
  `github-readme-stats`,
  `nextjs-corporate-starter-main`,
  `pwa-builder`,
  `legendary-journey`,
  `alx-higher_level_programming`,
  `alx-low_level_programming`,
  `printf`,
  `Bincom-project`,
  `lendsqr-fe-test`,

];
const CONFIG = {
  github: {
    username: USERNAME, // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: '"Public" Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 50, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: EXCLUDED_PROJECTS.map(
            (project) => `${USERNAME}/${project}`,
          ), // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        /**
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
         */
      },
    },
    external: {
      // External / Private projects (contract work or non-github projects)
      header: 'Private & Contract Work',
      // To hide the `External Projects` section, keep `projects` empty.
      projects: [
        {
          title: 'SpinLotto',
          description: `SpinLotto is a Nigeria-based sports-betting and lottery-draw platform that features an interactive lucky wheel spin mechanic. Contributed as a frontend contractor implementing responsive UI, interactive spin experience, and integration with backend endpoints and analytics.`,
          imageUrl:
            'https://img.freepik.com/free-vector/online-gambling-abstract-concept-illustration_335657-3336.jpg',
          link: 'https://spinlotto.com.ng',
        },
        {
          title: 'Plagiarism Checker (React Native)',
          description: `Cross-platform React Native mobile app that accepts text or document uploads, requests plagiarism reports from a backend service, visualizes match highlights and statistics, and generates downloadable PDF reports for users. Implemented UI, file handling, and frontend-backend integration.`,
          imageUrl:
            'https://img.freepik.com/free-vector/checklist-concept-illustration_114360-7211.jpg',
          link: '',
        },
        {
          title: 'Final Year Project — Skin Disease Detection System',
          description: `Convolutional neural network (TensorFlow) trained to detect and classify skin lesion types from images. Built a Telegram bot, a web frontend and a Progressive Web App (PWA) so users can upload images and receive classification results. Frontend (PWA) repo and demo: https://github.com/tonyrex99/skin-disease-app — Backend (inference API): https://github.com/tonyrex99/skin_backend`,
          imageUrl:
            'https://img.freepik.com/free-vector/medical-research-abstract-concept-illustration_335657-3242.jpg',
          link: 'https://github.com/tonyrex99/skin-disease-app',
        },
        {
          title: 'Fintech Products (Confidential)',
          description: `Multiple fintech product components developed under contract (details withheld). High-level contributions include agent onboarding and management, inventory/device accountability, admin dashboards for commissions and payouts, partner portals, verification workflows, and a payout scheduler. Details are abstracted due to an active contract.`,
          imageUrl:
            'https://img.freepik.com/free-vector/financial-technology-concept-illustration_114360-1405.jpg',
          link: '',
        },
        {
          title: 'Reflex Pro (React Native)',
          description: `Reflex Pro is a cross-platform React Native + Expo mobile app that measures reaction time and focus with interactive challenges (tap-to-change colour, timed sequences, memory levels, and pop-to-tap tests). Published on Google Play Store.`,
          imageUrl:
            'https://play-lh.googleusercontent.com/ybH4uq4IVRuCckDR_crcZIfGuJhpUxBv80S_A4FP6Q0CkSq6E2etE5Tws3UtIlF_wfG5xsIaA1eA5goLLo5DQg=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.reflexpro.app',
        },
        {
          title: 'Mobile Games (Quizzes & Puzzles)',
          description: `Various casual mobile games published previously including quiz games (e.g., children's trivia), word-puzzle games that connect words (crossword-like), and simple arcade titles. Implemented game UI, levels, scoring, and Play Store publishing flow.`,
          imageUrl:
            'https://img.freepik.com/free-vector/game-controller-concept-illustration_114360-1707.jpg',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Adenuga Ebunifeoluwa',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ebunifeoluwa-adenuga',
    twitter: '', // 'arif_szn',
    mastodon: '', //'arifszn@mastodon.social',
    researchGate: '', //
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '', //'arifszn',
    dev: '', // 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'https://t.me/tonyrex99',
    website: `https:${USERNAME}/github.io`, //'https://www.arifszn.com',
    phone: '',
    email: 'tonyrex99@wearehackerone.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/128gNTYXowPHKQcYgV6cWsu3dr5so5uL1/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Next.js',
    'Remix.js',
    'Node.js',
    'MySQL',
    'Git',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'SAPPHIRE VIRTUAL NETWORKS LIMITED',
      position: 'Frontend Developer (Remote)',
      from: 'May 2025',
      to: 'Present',
      companyLink: 'https://sapphirevirtual.com/',
      // notes: Contributed to fintech products, reporting, performance and API integrations
    },
    {
      company: 'Freelance / Independent Projects',
      position: 'Front-end, Desktop & Back-end Developer',
      from: 'November 2024',
      to: 'Present',
      companyLink: '',
      // notes: .NET MAUI, Windows Forms, POS reverse-engineering, Node.js + GraphQL e-commerce, Odoo modules
    },
    {
      company: 'Ashinity Synergy',
      position: 'Front-end and Mobile Developer',
      from: 'February 2024',
      to: 'October 2024',
      companyLink: '',
      // notes: Performance optimizations, NextJS/Remix work, code refactors and deployments
    },
    {
      company: 'Infonomics Technology Services',
      position: 'Software Developer',
      from: 'July 2023',
      to: 'September 2023',
      companyLink: 'https://www.infonomicsng.com/',
    },
    {
      company: 'Mdot Technologies',
      position: 'Cross-Platform React Developer',
      from: 'March 2023',
      to: 'July 2023',
      companyLink: '',
    },
    {
      company: 'Patea Essentials',
      position: 'Computer Operator and Technician',
      from: 'June 2017',
      to: 'April 2021',
      companyLink: '',
    },
  ],

  certifications: [
    {
      name: 'Network Support and Security',
      body: 'Cisco',
      year: 'September 2024',
      link: 'https://www.credly.com/badges/5bb105b5-7cb1-467f-b3ce-6c5785852ccb/linked_in_profile',
    },
    {
      name: 'Junior Cybersecurity Analyst Career Path',
      body: 'Cisco Networking Academy',
      year: 'September 2024',
      link: 'https://www.credly.com/badges/485aaa54-7f7b-418e-8020-ea4839689dc7/linked_in_profile',
    },
    {
      name: 'Network Defense',
      body: 'Cisco',
      year: 'September 2024',
      link: 'https://www.credly.com/badges/d4d2815d-1dfd-4bb4-90d5-352ed9de818b/linked_in_profile',
    },
    {
      name: 'Cyber Threat Management',
      body: 'Cisco',
      year: 'September 2024',
      link: 'https://www.credly.com/badges/c38c5a02-0aef-4a24-814b-622f5754001b/linked_in_profile',
    },
    {
      name: 'Ethical Hacker',
      body: 'Cisco',
      year: 'September 2024',
      link: 'https://www.credly.com/badges/2aa47622-3a30-4492-90fd-9d1c69f95450/linked_in_profile',
    },
    {
      name: 'Endpoint Security',
      body: 'Cisco',
      year: 'August 2024',
      link: 'https://www.credly.com/badges/0def7128-a645-43ac-9dd0-6aee6d8cbab0/linked_in_profile',
    },
    {
      name: 'Frontend Developer (React)',
      body: 'HackerRank',
      year: 'August 2024', // No exact date in the resume, assuming date
      link: 'https://www.hackerrank.com/certificates/cf9323173cb9', // No link provided in the resume, update if needed
    },
    {
      name: 'Prompt Engineering',
      body: 'Covenant University',
      year: '2024',
      link: '',
    },
    {
      name: 'Live the Code 2.0',
      body: 'GeeksforGeeks ADGIPS Chapter',
      year: 'September 2023',
      link: 'https://certificate.givemycertificate.com/c/c9f730a6-bed2-4707-b29b-a8684ad1f899',
    },
    {
      name: 'React Native',
      body: 'Coursera',
      year: 'December 2022',
      link: 'https://www.coursera.org/account/accomplishments/certificate/VY4LLMU7SDCH',
    },
    {
      name: 'Project: Creating Your First C++ Application',
      body: 'Coursera',
      year: 'August 2022', // Add exact dates if required
      link: 'https://www.coursera.org/account/accomplishments/certificate/HSNVMF3RMFUA', // No direct link provided
    },
    {
      name: 'Programming in C++: A Hands-on Introduction Specialization',
      body: 'Coursera',
      year: 'August 2022', // Add exact dates if required
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/W2WDC9P84SC6', // No direct link provided
    },
    {
      name: 'Introduction to Cybersecurity',
      body: 'Cisco',
      year: 'July 2022', // No exact date in the resume, assuming date
      link: 'https://www.credly.com/badges/ae676fb9-7555-41e2-89ac-b54f198da9d0?source=linked_in_profile', // No link provided in the resume, update if needed
    },
    {
      name: 'C Basics: Selection and Iteration',
      body: 'Coursera',
      year: 'July 2022',
      link: 'https://www.coursera.org/account/accomplishments/certificate/959RDEJD6AXQ',
    },
    {
      name: 'Introduction to TensorFlow for AI, ML, and Deep Learning',
      body: 'Coursera',
      year: 'May 2021',
      link: 'https://www.coursera.org/account/accomplishments/certificate/W4GWBGHGWBJ8',
    },
    {
      name: 'Python Basics',
      body: 'Coursera',
      year: 'July 2020',
      link: 'https://www.coursera.org/account/accomplishments/certificate/X3SP92C36LCS',
    },
  ],

  educations: [
    {
      institution: 'Covenant University',
      degree: "Bachelor's degree, Computer Engineering",
      from: '2019',
      to: '2024',
    },
  ],
  publications: [
    /*  {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },*/
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // 'dev', // medium | dev
    username: '', //'arifszn', // to hide blog section, keep it empty
    limit: '', // 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
