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
      /**
      header: 'Private Projects',
      // To hide the `External Projects` section, keep it empty.

      projects: [
        {
          title: 'Gazzar',
          description: `Gazzar is an extensive, React-based eCommerce platform designed to empower businesses by allowing them to create and manage their own private stores, much like Shopify. The platform offers a seamless way for businesses to handle key aspects of online transactions, including product and customer management, order tracking, performance monitoring, and more.

With a rich feature set, Gazzar allows business owners to customize their storefronts with unique themes and specialized functionalities, delivering an optimal user experience. It supports the display of detailed statistics and performance metrics, enabling businesses to track their sales, order status, and customer reviews effectively. Gazzar also offers future-proof features, such as customizable storefront skins and themes, which will be rolled out soon.

This project showcases advanced proficiency in ReactJS, CSS, and the Ant Design component library. The use of Ant Design helps maintain a standardized and customizable design foundation, which is integral to the look and feel of Gazzar’s dynamic business-specific themes.

Gazzar is designed not only to make it easy for businesses to manage their eCommerce operations but also to ensure a smooth shopping experience for customers. The storefront allows users to add items to carts, check out, and interact with businesses seamlessly.`,
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
       */
    },
  },
  seo: {
    title: 'Portfolio of Adenuga Ebunifeoluwa',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ebunifeoluwa-adenuga-131a981b1',
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
      company: 'Ashinity Synergy',
      position: 'Front-End and Mobile Developer',
      from: 'February 2024',
      to: 'Present',
      companyLink: '', //'https://example.com', // No link provided in the resume, update if needed
    },
    {
      company: 'Infonomics Technology Services',
      position: 'React Developer',
      from: 'July 2023',
      to: 'September 2023',
      companyLink: '', //'https://example.com', // No link provided in the resume, update if needed
    },
    {
      company: 'Mdot Technologies',
      position: 'Cross-Platform React Developer',
      from: 'March 2023',
      to: 'July 2023',
      companyLink: '', // 'https://example.com', // No link provided in the resume, update if needed
    },
    {
      company: 'Patea Essentials',
      position: 'Computer Operator and Technician',
      from: 'June 2017',
      to: 'April 2021',
      companyLink: '', //'https://example.com', // No link provided in the resume, update if needed
    },
  ],

  certifications: [
    {
      name: 'Frontend Developer (React)',
      body: 'HackerRank',
      year: 'August 2024', // No exact date in the resume, assuming date
      link: 'https://www.hackerrank.com/certificates/cf9323173cb9', // No link provided in the resume, update if needed
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
      name: 'Introduction to Cybersecurity',
      body: 'Cisco',
      year: 'July 2022', // No exact date in the resume, assuming date
      link: 'https://www.credly.com/badges/ae676fb9-7555-41e2-89ac-b54f198da9d0?source=linked_in_profile', // No link provided in the resume, update if needed
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
    {
      name: 'C Basics: Selection and Iteration',
      body: 'Coursera',
      year: 'July 2022',
      link: 'https://www.coursera.org/account/accomplishments/certificate/959RDEJD6AXQ',
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
