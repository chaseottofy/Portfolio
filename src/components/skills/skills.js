import skillsData from '../../data/json/skills/skills-data.json';
import svgIcons from '../../utilities/get-svg';
import createIcon from '../ui/icon';

const createSkill = (content, imgSrc, title, parent) => {
  const skillTitle = parent.querySelector('.skill-title');
  const skillContent = parent.querySelector('.skill-content');
  const skillImgWrapper = parent.querySelector('.skill-img--wrapper');
  skillTitle.textContent = title;

  const createSkillContent = (text) => {
    const skillListItem = document.createElement('li');
    skillListItem.textContent = `• ${text}`;
    skillContent.append(skillListItem);
  };

  for (const text of content) {
    createSkillContent(text);
  }

  const iconClass = title.toLowerCase() === 'wordpress' ? 'skill-img--wp' : null;
  const skillImg = createIcon(iconClass, imgSrc, null);
  skillImgWrapper.append(skillImg);
};

const configSkillsGrid = () => {
  const skillsCells = document.querySelectorAll('.skills-cell');
  for (let i = 0; i < skillsData.length; i += 1) {
    const skill = skillsData[i];
    const skillCell = skillsCells[i];
    const { content, imgSrc, title } = skill;
    const { [imgSrc]: img } = svgIcons;
    createSkill(content, img, title, skillCell);
  }
};

const initSkills = () => {
  configSkillsGrid();
};

export default initSkills;
