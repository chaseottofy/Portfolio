import path from 'path';
import fs, { readFile } from 'fs/promises';
import { captureRejectionSymbol } from 'events';

// import { projectD}
// import { projectData } from '../src/data/json/project-data.json';'
// const { default: projectData } = await import('../src/data/json/project-data.json', {
//   assert: {
//     type: 'json',
//   },
// });

// write a function that gets all the names of the files from a specified directory (one level)
const projectData = JSON.parse(
  await readFile(
    new URL('../src/data/json/project-data.json', import.meta.url)
  )
);

const init = async () => {
  try {
    // const projectImagesDir = './src/images/imgproj/';
    // const files = await fs.readdir(path.normalize(projectImagesDir));
    // const path = path.normalize('src/images/imgproj/');

    if (!projectData) {
      console.error('Error reading project data');
      return;
    }
    const fillers = {
      '1': 'fallback1',
      '2': 'fallback2',
    };

    const prefix = '../../images/imgproj/';
    const imageData = {};
    const projectKeys = Object.keys(projectData);
    const conjoinImages = Object.keys(projectData).map((k, i) => Object.values(projectData[k].images).flat()).flat();
    // console.log(conjoinImages.slice().map((x) => 'import ' + projectKeys.find(v => x.startsWith(v)) + prefix + x));
    console.log(
      '[' + conjoinImages
        .map(x => x.slice(0, -5))
        .join('\n')
        .replace(/["]/g, '')
        .replace(/\n/g, ', ')
      + ']'
    );

    const imprts = conjoinImages
      .slice()
      .map((x) => `import ${x.slice(0, -5)} from '${prefix + x}'`)
      .join('\n')
      .replace(/["]/g, '');
    console.log(imprts);

    const red = conjoinImages.reduce((acc, curr) => {
      const k = curr.slice(0, -6);
      if (acc[k]) {
        acc[k].push(curr);
      } else {
        acc[k] = [curr];
      }
      return acc;
    }, {});

    const seen = new Set();
    const projtabs = projectKeys.filter((tk) => projectData[tk].hasTabs);
    const grouped = {};
    for (let i = 0; i < projectKeys.length; i++) {
      const key = projectKeys[i];
      const tk = projectKeys[i];
      if (projtabs.includes(key)) {
        const { card: { tabs } } = projectData[tk];
        for (let j = 0; j < tabs.length; j++) {
          const start = (tk + tabs[j]).toLowerCase();
          const tab1 = start + '1';
          const tab2 = start + '2';
          grouped[tk] = grouped[tk] ? [...grouped[tk], [tab1, tab2]] : [[tab1, tab2]];
        }
      } else {
        grouped[tk] = [tk + '1', tk + '2'];
      }
    }

    console.log(grouped);
  } catch (error) {
    console.error('Error checking path:', error);
  }
};

init();

