const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/chikku-10/personal-portfolio',
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
    name: 'Simple 2D game',
    description:
    'A small fun game where the user can collect berries and increase the score.',
    stack: ['React'],
    sourceCode: 'https://github.com/chikku-10/pokemon-game',
    livePreview: 'https://chikku-10.github.io/pokemon-game/',
  },
  {
    name: 'Drawing App',
    description:
    'A small applcation to draw polygons, based on SVGs',
    stack: ['React'],
    sourceCode: 'https://github.com/chikku-10/drawing-app',
    livePreview: 'https://chikku-10.github.io/drawing-app/',
  },
  {
    name: 'Real time chat',
    description:
      'A real time room based chat application.',
    stack: ['React', 'Firebase', 'Material UI'],
    sourceCode: 'https://github.com/chikku-10/react-chat-app',
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
  "Firebase"
]

const exploringSkills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Framer-motion',
  'Tailwind',
  'Three JS',
  "Vue JS"
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jiginrajr@gmail.com',
}

const workExperience = [
  {
    company: "Infosys",
    profile:" Systems Engineer",
    joining: "Aug-2021",
    ending: "Present",
    period : "2 years",
    descripton : [
      "Technical experience in developing React JS Application.Experience includes working with Redux store, React custom and default Hooks, Reusable components and Props for the data flow",
      "Worked with third party libraries like ReactDnD for creating complex utility functionalities and used Axios for handling REST APIs. Improved website performance using several memoization methodologies offered by React and delaying DOM rendering for non-visible components.",
      "Experienced in JavaScript, HTML5, vanilla CSS and css frameworks like Material UI and Bootstap in building responsive Front-End applications",
      "This was an agile based project and I played the role of developer to build UI of Application and constantly communicated with the clients to resolve anomalies.",
      "Worked on unit testing of react components using enzyme and React testing library and supported in different testing stages of the application.",
      "Have experience in version control tools like Git and hosting services like GutHub and Azure built tool.",
      "Worked in Azure MSAL Auth 2.0 library to authenticate users for the developed applications."
    ]
  }
]

export { header, about, projects, skills, contact, exploringSkills,workExperience }
