import sharp from 'sharp';
// import yargs from 'yargs';
// import { hideBin } from 'yargs/helpers';

import fs from 'fs';
import path from 'path';
import {
  initGlobalDirname,
  clearDirectory,
} from './utils.mjs';
import {
  defaultDataURL,
} from './defaults.mjs';

// hack to allow __dirname
initGlobalDirname();

class ImageConfig {
  #mode = '';
  #acceptedModes = ['placeholder', 'base64', 'both'];

  #postsDirectory = '';
  #placeholdersDirectory = '';
  #output64Directory = '';

  #acceptedFileExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
  #acceptedBase64OutputTypes = ['mdx', 'json', 'ts'];
  #dataUrlPrefix = `data:image/webp;base64,`;

  constructor() {
    this._baseStartDirectory = '../src';
    this._baseOutput64Directory = '../data';

    this._postsFolder = 'imgprojstart2';

    this._postsPlaceholderFolder = 'imgproj';
    this._placeholderFileSuffix = '';

    this._imageFileExtension = 'webp';
    this._outputImageQuality = 99;
    this._resizeOptions = {
      width: 1600,
      height: 900,
      fit: 'cover',
      position: 'top'
    };
    this._outputImageSize = 1;

    this._outputVariableName = 'imagePlaceholders';
    this._outputFilename = 'image-placeholders';
    this._outputFileExtension = 'ts';

    this._generateDefault = true;
    this._defaultDurl = defaultDataURL;
  }

  init() {
    this.initMode();
    this.initStartDirectory();
    this.initOutputDirectory();
  }

  initMode() {
    const args = process.argv.slice(2);
    for (const arg of args) {
      if (arg.startsWith('--mode=')) {
        const tempMode = arg.split('=')[1];
        if (!this.#acceptedModes.includes(tempMode)) {
          throw new Error(`Invalid mode specified. Must be one of: ${this.#acceptedModes.join(', ')}`);
        }
        this.#mode = arg.split('=')[1];
      }
    }
  }

  initStartDirectory() {
    this.#postsDirectory = path.join(
      __dirname,
      `${this._baseStartDirectory}/${this._postsFolder}`
    );
    this.#placeholdersDirectory = path.join(
      __dirname,
      `${this._baseStartDirectory}/${this._postsPlaceholderFolder}`
    );
    if (fs.existsSync(this.#placeholdersDirectory) && this.#mode === 'placeholder') {
      clearDirectory(this.#placeholdersDirectory);
    }
  }

  initOutputDirectory() {
    this.#output64Directory = path.join(
      __dirname,
      `${this._baseOutput64Directory}/${this._outputFilename}.${this._outputFileExtension}`
    );
  }

  get resizeOptions() { return this._resizeOptions; }
  get mode() { return this.#mode; }
  get postsDirectory() { return this.#postsDirectory; }
  get acceptedImageFileExtensions() { return this.#acceptedFileExtensions; }
  get acceptedBase64OutputTypes() { return this.#acceptedBase64OutputTypes; }

  /**
   * @returns {string} - '_baseStartDirectory/_placeholderFolder'
   * @example '../public/images/posts/placeholders'
   */
  get placeholdersDirectory() { return this.#placeholdersDirectory; }
  get output64Directory() { return this.#output64Directory; }

  get baseStartDirectory() { return this._baseStartDirectory; }
  get baseOutput64Directory() { return this._baseOutput64Directory; }
  get postsFolder() { return this._postsFolder; }
  get postsPlaceholderFolder() { return this._postsPlaceholderFolder; }

  /**
   * @returns {string} - The suffix to be appended to the placeholder image file
   * @example 
   * - placeholderFileSuffix = '_placeholder'
   * - ../public/images/posts/placeholders/imageName${placeholderFileSuffix}.webp
   * - ../public/images/posts/placeholders/imageName_placeholder.webp
   */
  get placeholderFileSuffix() { return this._placeholderFileSuffix; }
  /** 
   * @param {string} value - The suffix to be appended to the placeholder image file 
   * @remarks
   * - Must only contain a-z, A-Z, 0-9, -, and _
   * - If you want to use a space, change the below regex to the following:
   * ```js
   * const regex = /[^a-zA-Z0-9-_ ]/g;
   * ```
  */
  set placeholderFileSuffix(value) {
    // write a regex to remove any character other than a-z, A-Z, 0-9, -, and _.
    const regex = /[^a-zA-Z0-9-_]/g;
    if (regex.test(value)) {
      throw new Error(`Invalid suffix specified. Must only contain a-z, A-Z, 0-9, -, and _`);
    }
    this._placeholderFileSuffix = value;
  }

  get dataUrlPrefix() { return this.#dataUrlPrefix; }
  get imageFileExtension() { return this._imageFileExtension; }
  /**
   * @param {string} value - The file extension of the images to be converted
   * - Must be one of: ['.jpg', '.jpeg', '.png', '.webp', '.avif']
   */
  set imageFileExtension(value) {
    if (!this.#acceptedFileExtensions.includes(value)) {
      throw new Error(`Invalid file extension specified. Must be one of: 
      ${this.#acceptedFileExtensions.join(', ')}`);
    }
    this._imageFileExtension = value;
    this.#dataUrlPrefix = `data:image/${value};base64;`;
  }

  get outputImageQuality() { return this._outputImageQuality; }
  /** @param {number} value - The quality of the output image (1-100)*/
  set outputImageQuality(value) {
    this._outputImageQuality = value;
  }

  get outputImageSize() { return this._outputImageSize; }
  /**
   * @param {number} value - Float value multiplier for the output image size (0-1)
   * - 0.2 = 20% of original image size
   * - 0.5 = 50% of original image size
   * - 1 = 100% of original image size
   */
  set outputImageSize(value) {
    if (value < 0 || value > 1) {
      throw new Error(`Invalid output image size specified. Must be between 0 and 1.`);
    }
    this._outputImageSize = value;
  }

  get outputVariableName() { return this._outputVariableName; }
  /**
   * @param {string} value - The name of the variable created in output file
   * @example
   * - if outputVariableName = 'imagePlaceholders' && outputFileExtension = 'ts'
   * - the created object within the output file will be called 'imagePlaceholders'
   */
  set outputVariableName(value) {
    this._outputVariableName = value;
  }

  get outputFilename() { return this._outputFilename; }
  set outputFilename(value) {
    this._outputFilename = value;
    this.initOutputDirectory();
  }

  get outputFileExtension() { return this._outputFileExtension; }
  set outputFileExtension(value) {
    if (!this.#acceptedBase64OutputTypes.includes(value)) {
      throw new Error(`Invalid file extension specified. Must be one of:
      ${this.#acceptedBase64OutputTypes.join(', ')}`);
    }
    this._outputFileExtension = value;
    this.initOutputDirectory();
  }

  get generateDefault() { return this._generateDefault; }
  /** @param {boolean} value - Whether or not to generate a default durl */
  set generateDefault(value) { this._generateDefault = typeof value === 'boolean' ? value : true; }

  get defaultDurl() { return this._defaultDurl; }
  /**
   * @param {string} value - The default durl to be used for images that fail to load
   * @remarks
   * Will be specified in chosen output file as 'default' property
   */
  set defaultDurl(value) {
    const matches = value.match(/^data:image\/[a-zA-Z]+;base64,/);
    if (!matches) {
      throw new Error(`Invalid default durl specified. Must be a valid data url.`);
    }
    this._defaultDurl = value;
  }
}

const config = new ImageConfig();
config.init();

// If paths do not exist, create them
if (!fs.existsSync(config.postsDirectory)) {
  fs.mkdirSync(config.placeholdersDirectory, { recursive: true });
}

// Get all image files from posts directory
const files = fs.readdirSync(config.postsDirectory);
const imageFiles = files.filter(file => config.acceptedImageFileExtensions.some(ext => file.endsWith(ext)));

async function createImagePlaceholder() {
  const tasks = imageFiles.map(async (imageFile) => {
    const inputImagePath = path.join(config.postsDirectory, imageFile);
    const imageNameWithoutExt = path.basename(imageFile, path.extname(imageFile));
    const outputImagePath = path.join(
      config.placeholdersDirectory,
      `${imageNameWithoutExt}${config.placeholderFileSuffix}.${config.imageFileExtension}`
    );
    const { width, height, fit, position } = config.resizeOptions;
    const [smW, smH] = [width * 0.5, height * 0.5];

    const imageMetadata = await sharp(inputImagePath).metadata();
    if (imageMetadata.width && imageMetadata.height) {
      const img = sharp(inputImagePath);
      const isSmall = inputImagePath.slice(-6, -5) === '2';
      const options = {
        width: isSmall ? smW : width,
        height: isSmall ? smH : height,
        fit: fit,
        position: position
      };
      img.resize(options)
        .normalise()
        .modulate({
          brightness: 1.1,
          saturation: 1.1,
          lightness: .8,
        })
        .toBuffer()
        .then((data) => {
          return sharp(data)
            .webp({
              quality: config.outputImageQuality,
              lossless: false,
              effort: 6,
            })
            .toFile(outputImagePath);
        });
    }
  });
  await Promise.all(tasks);
  console.log(`Processed ${tasks.length} images.`);
}

const runPlaceholder = () => {
  createImagePlaceholder().catch(err => console.error("PLACEHOLDER processing error:", err));
};

const init = () => {
  runPlaceholder();
};

init();
