// gitprofile.config.js

const config = {
  github: {
    username: 'Harmeetrai', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['laravel-ecommerce'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'harmeet-rai-914386147',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'harmeetrai',
    website: 'http://harmeetrai.me',
    phone: '',
    email: 'hsr4@sfu.ca',
  },
  skills: [
    'Python',
    'C++',
    'Java',
    'React.js',
    'Node.js',
    'SQL',
    'Git',
    'Docker',
    'CSS',
    'R',
    'Machine Learning',
    'Cloud Development (AWS)',
  ],
  experiences: [
    {
      company: 'Rai Video Production',
      position: 'Manager',
      from: '2014',
      to: 'Present',
    },
    {
      company: 'Youth Aid International',
      position: 'Fundraising Coordinator',
      from: 'September 2016',
      to: 'September 2020',
    },
  ],
  education: [
    {
      institution: 'Simon Frasor University',
      degree: 'Bachelor of Science',
      from: '2020',
      to: '2024',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'harmeetrai',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

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
      'procyon',
    ],

    // Custom theme
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
};

export default config;
