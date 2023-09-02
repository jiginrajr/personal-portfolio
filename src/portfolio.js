const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jigin Raj R',
  role: 'Front End Engineer',
  description:
    'As a frontend web developer and avid technophile, I possess a strong desire to learn emerging technologies and leverage them to solve complex technological challenges. I am currently seeking a role that aligns with my goals and aspirations to advance as a full-stack web developer.',
  resume: 'https://drive.google.com/file/d/1-jNlbPpHrZI7aukPC5J5qn18qjZsGUJt/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/jigin-raj-r/',
    github: 'https://github.com/chikku-10',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML5',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
  'React Testing Library',
  'Rest API',
  'Node JS',
]

const exploringSkills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Framer-motion',
  'Tailwind',
  'Three JS'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jiginrajr@gmail.com',
}

export { header, about, projects, skills, contact, exploringSkills }
