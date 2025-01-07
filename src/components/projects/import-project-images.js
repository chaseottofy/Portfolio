import { imgTypesRegex } from '../../data/constants';
import projectData from '../../data/json/projects/project-data.json';
import fallback from '../../images/fallback/fallback.webp';
import fallbackMd from '../../images/fallback/fallbackMd.webp';
import getImgStem from '../../utilities/get-img-stem';

class ImageLoader {
  constructor(userJsonConfig) {
    this.config = userJsonConfig;
    this.keys = Object.keys(this.config);
    this.imageProps = ['large', 'medium'];
    this.projectImages = this.importAllImages();
    this.fallback = {
      large: fallback,
      medium: fallbackMd,
    };
    this.loadedImages = new Map();
  }

  getRequiredImages() {
    const requiredImages = new Set();
    for (const key of this.keys) {
      const { images = [] } = this.config[key];
      if (images.length === 0) return;
      for (const arr of Object.values(images)) {
        for (const img of arr) {
          requiredImages.add(getImgStem(img));
        }
      }
    }
    return requiredImages;
  }

  importAllImages() {
    const validImages = this.getRequiredImages();
    const loadImages = {};
    const context = require.context('../../images/imgproj', false, /\.(webp|png|jpe?g)$/);
    for (const key of context.keys()) {
      const fileName = (key
        .replace('./', '')
        .replace(imgTypesRegex, '')) || 'fallback';
      if (validImages.has(fileName)) {
        loadImages[fileName] = context(key);
      }
    }
    return loadImages;
  }

  getImage(key, size = 'large') {
    const img = (this.projectImages[getImgStem(key)]) || fallback[size];
    return img;
    // return `../../${img}`;
  }

  getAllProjectImages() {
    const projects = {};
    for (const key of this.keys) {
      projects[key] = this.getProjectImages(key);
    }
    return projects;
  }

  getFillerArray(len, size) {
    return Array.from({ length: len }, () => this.fallback[size]);
  }

  getProjectImages(key) {
    const { images = [] } = this.config[key];
    if (images.length === 0) return this.fallback;

    const imagePaths = [];
    // handle cases with tabs and missing large || medium images
    if (this.imageProps.every((prop) => prop in images)) {
      const { large, medium } = images;
      const diff = Math.abs(large.length - medium.length);
      if (Math.abs(large.length - medium.length) > 0) {
        const largeSmaller = large.length < medium.length;
        const filler = this.getFillerArray(diff, largeSmaller ? 'large' : 'medium');
        if (largeSmaller) large.push(...filler);
        else medium.push(...filler);
      }
      for (let i = 0; i < large.length; i += 1) {
        imagePaths.push(this.getImage(large[i]), this.getImage(medium[i], 'medium'));
      }
    }
    return imagePaths;
  }

  getProjectImagesWithKeys(key) {
    const { images = [] } = this.config[key];
    if (images.length === 0) return this.fallback;

    const imagePaths = {};
    // handle cases with tabs and missing large || medium images
    if (this.imageProps.every((prop) => prop in images)) {
      const { large, medium } = images;
      const diff = Math.abs(large.length - medium.length);
      if (Math.abs(large.length - medium.length) > 0) {
        const largeSmaller = large.length < medium.length;
        const filler = this.getFillerArray(diff, largeSmaller ? 'large' : 'medium');
        if (largeSmaller) large.push(...filler);
        else medium.push(...filler);
      }
      for (let i = 0; i < large.length; i += 1) {
        const identifier = getImgStem(large[i]).slice(0, -1);
        imagePaths[identifier] = {
          large: this.getImage(large[i]),
          medium: this.getImage(medium[i], 'medium'),
        };
      }
    }
    return imagePaths;
  }

  getImagesWithTabs() {
    const projects = {};
    for (const key of this.keys) {
      if (this.config[key].hasTabs) {
        projects[key] = this.getProjectImagesWithKeys(key);
      }
    }
    return projects;
  }
}

const imageLoader = new ImageLoader(projectData);
const startingImageSets = imageLoader.getAllProjectImages();
const tabbedProjects = imageLoader.getImagesWithTabs();
export default tabbedProjects;
export { startingImageSets };
