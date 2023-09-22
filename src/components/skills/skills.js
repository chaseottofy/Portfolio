import svgIcons from '../../utilities/get-svg';
import createIcon from '../ui/icon';

const createSkill = (content, imgSrc, title) => {
  const skillCell = document.createElement('div');
  skillCell.classList.add('skills-cell');
  const skillTitle = document.createElement('h4');
  skillTitle.classList.add('skill-title');
  skillTitle.textContent = title;
  const skillContent = document.createElement('div');
  skillContent.classList.add('skill-content');
  const createSkillContent = (text) => {
    const span = document.createElement('span');
    span.textContent = `- ${text}`;
    skillContent.append(span);
  };
  for (const text of content) {
    createSkillContent(text);
  }
  const skillImgWrapper = document.createElement('div');
  skillImgWrapper.classList.add('skill-img--wrapper');
  const skillImg = createIcon(
    title.toLowerCase() === 'wordpress' ? 'skill-img--wp' : null,
    imgSrc,
    title,
  );
  skillImgWrapper.append(skillImg);
  skillCell.append(skillTitle, skillContent, skillImgWrapper);
  return skillCell;
};

const configSkillsGrid = () => {
  const skillsGrid = document.querySelector('.skills-grid');
  const {
    react, vanilla, webpack, css, next, typescript, wordpress,
  } = svgIcons;
  const skillsArray = [
    {
      content: [
        'Developed reusable React components for various projects.',
        'Utilized hooks for state management and lifecycle methods.',
        'Integrated third-party libraries for enhanced UI/UX.',
      ],
      imgSrc: react,
      title: 'React JS',
    },
    {
      content: [
        'Implemented complex features without relying on frameworks.',
        'Optimized website performance and responsiveness.',
        'Debugged and resolved cross-browser compatibility issues.',
      ],
      imgSrc: vanilla,
      title: 'Vanilla JS',
    },
    {
      content: [
        'Typed JavaScript for better maintainability and fewer runtime errors.',
        'Integrated third-party libraries with custom type declarations.',
        'Utilized advanced types and generics for complex logic.',
      ],
      imgSrc: typescript,
      title: 'TypeScript',
    },
    {
      content: [
        'Configured Webpack for optimized bundling and chunking.',
        'Set up loaders and plugins for transpiling and asset management.',
        'Enhanced app performance through tree shaking and code splitting.',
      ],
      imgSrc: webpack,
      title: 'Webpack',
    },
    {
      content: [
        'Designed responsive layouts with Flexbox and Grid.',
        'Implemented animations and transitions for improved user interactions.',
        'Ensured cross-browser styling consistency.',
      ],
      imgSrc: css,
      title: 'CSS',
    },
    {
      content: [
        'Built SEO-friendly web apps with static site generation.',
        'Optimized page loads with incremental static regeneration.',
        'Integrated with various data sources using Next.js API routes.',
      ],
      imgSrc: next,
      title: 'Next.js',
    },
    {
      content: [
        'Set up and customized WordPress sites for various clients.',
        'Implemented custom themes and plugins to enhance site functionality.',
        'Optimized site speed and ensured security through regular updates.',
      ],
      imgSrc: wordpress,
      title: 'WordPress',
    },
  ];

  for (const skill of skillsArray) {
    const { content, imgSrc, title } = skill;
    const skillCell = createSkill(content, imgSrc, title);
    skillsGrid.append(skillCell);
  }
};

const initSkills = () => {
  configSkillsGrid();
};

export default initSkills;
