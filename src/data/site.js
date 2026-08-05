export const siteMeta = {
  name: 'Jingwen Wu',
  title: 'Jingwen Wu',
  description:
    'Personal website for Jingwen Wu.',
  email: 'jingwenw@cs.stanford.edu',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/jingwenw15' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jingwen15' },
  ],
};

export const navItems = [
  { label: 'About', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Education', href: '/education' },
  { label: 'Fun', href: '/fun-stuff' },
];

export const aboutPage = {
  heading: 'Hi, I’m Jingwen.',
  paragraphs: [
    'I currently work at Microsoft Azure as a software engineer. Previously, I graduated from Stanford with a B.S. and M.S. in Computer Science with an AI specialization.',
    'Outside of work, I enjoy singing, music production, playing instruments, cooking, vibe coding, reading Hacker News, and casually gaming.',
  ],
};

export const workItems = [
  {
    organization: 'Microsoft Corporation',
    period: 'July 2024 - Present',
    summary:
      'I have been on various teams, including Azure Kubernetes Service, Azure Managed Redis, and NGINXaaS for Azure.',
    roles: [
      {
        title: 'Software Engineer II',
        period: 'Sept 2025 - Present',
        bullets: [],
      },
      {
        title: 'Software Engineer',
        period: 'July 2024 - Sept 2025',
        bullets: [],
      },
    ],
  },
  {
    organization: 'Microsoft Corporation',
    period: 'Summer 2021 - Summer 2023',
    summary:
      '',
    roles: [
      {
        title: 'Software Engineer Intern',
        period: 'Summer 2023',
        bullets: [
          'Designed and implemented a proof-of-concept using NGINXaaS for Azure as the ingress controller for Azure Kubernetes Service.',
          'Covered traffic management, reverse proxy, L7 load balancing, SSL termination, SSL redirect, and health probing.',
        ],
      },
      {
        title: 'Software Engineer Intern',
        period: 'Summer 2022',
        bullets: [
          'Implemented, integrated, and deployed a new source of automated analysis for diagnostic traces of Azure customer applications.',
        ],
      },
      {
        title: 'Explore Intern',
        period: 'Summer 2021',
        bullets: [
          'Wrote a proof-of-concept for an Azure Functions profiler.',
          'Provided low-level CPU and memory data to help developers identify bottlenecks and improve Azure Functions performance.',
        ],
      },
    ],
  },
  {
    organization: 'Stanford University',
    period: 'Summer 2020 - Spring 2024',
    summary:
      '',
    roles: [
      {
        title: 'Course Assistant, CS224N: Natural Language Processing with Deep Learning',
        period: 'Spring 2024',
        bullets: [
          'Did not write midterm, but mentored students on the default final project.',
        ],
      },
      {
        title: 'Course Assistant, CS124: From Languages to Information',
        period: 'Winter 2024',
        bullets: [
          'Wrote the midterm again!',
        ],
      },
      {
        title: 'Course Assistant, CS145: Data Management and Data Systems',
        period: 'Fall 2023',
        bullets: [
          'Wrote the midterm :)',
        ],
      },
      {
        title: 'Research Assistant, Radiological Sciences Laboratory, KBP Lab',
        period: 'Summer 2020',
        bullets: [
          'Investigated how computational acoustic models of the skull vary under different assumed relationships and CT scan parameters to improve transcranial ultrasound therapies.',
        ],
      },
    ],
  },
];

export const educationItems = [
  {
    school: 'Stanford University',
    credential: 'Computer Science, M.S.',
    period: 'June 2024',
    notes: [
      'AI Specialization',
      'GPA: 4.10',
      "Course Assistant for CS145, CS124, and CS224N"
    ],
  },
  {
    school: 'Stanford University',
    credential: 'Computer Science, B.S. with Distinction',
    period: 'June 2023',
    notes: [
      "AI Specialization",
      'GPA: 4.14',
      "Terman Award -- top 30 graduating students in the School of Engineering",
      "Phi Beta Kappa"
    ],
  },
];

export const funSections = [
  {
    title: 'Music',
    description:
      'Some of my music on SoundCloud from a while ago...',
    items: [
      {
        label: 'Stay in Love',
        href: 'https://soundcloud.com/prodjingwen/stay-in-love?si=89ff8911f9484f91b710762f575d3d23&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      },
      {
        label: 'Winter',
        href: 'https://soundcloud.com/prodjingwen/winter?si=e41654687d354b358292ebee424dac82&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      },
      {
        label: 'Dice',
        href: 'https://soundcloud.com/prodjingwen/dice?si=e7d16acd598c454999123a16860615ec&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      },
    ],
  },
  {
    title: 'Experiments',
    description:
      'A few vibe-coded side projects.',
    items: [
      {
        label: 'daw',
        href: 'https://github.com/jingwenw15/daw',
      },
      {
        label: 'chordlens',
        href: 'https://github.com/jingwenw15/chordlens',
      },
      {
        label: 'VocalRider',
        href: 'https://github.com/jingwenw15/VocalRider',
      },
    ],
  },
];
