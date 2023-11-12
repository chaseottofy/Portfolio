import sharp from 'sharp';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import fs from 'fs';
import path from 'path';
import {
  initGlobalDirname,
  clearDirectory,
  isNum,
} from './utils.mjs';
import {
  defaultDataURL,
} from './defaults.mjs';

initGlobalDirname();

class ImageConfig {
  #mode = '';
  #acceptedModes = ['base', 'sub', 'out', 'wh', 'multiplier', 'format', 'quality'];
  #helpArray = [
    "npm run setparse (run script)",
    "npm run setparse:help (get list of commands)",
    "npm run setparse:base base/directory",
    "npm run setparse:sub folderWithinBase",
    "npm run setparse:out outputFolderWithinBase",
    "npm run setparse:wh width height (number number) (pixels)",
    "npm run setparse:multiplier 0.1 - 0.9 (value to multiply width and height of Lg image by",
    "npm run setparse:format jpg|jpeg|png|webp|avif (file extension : no dot)",
    "npm run setparse:ar aspectRatio e.g. 4/3 (only applies to small images)",
    "npm run setparse:current (get current config)",
    "npm run setparse:quality 1-99",
  ];

  #postsDirectory = '';
  #placeholdersDirectory = '';
  #output64Directory = '';

  #acceptedFileExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
  #acceptedBase64OutputTypes = ['mdx', 'json', 'ts'];
  #dataUrlPrefix = `data:image/webp;base64,`;

  constructor() {
    this._baseStartDirectory = '../src/images';
    this._baseOutput64Directory = '../data';

    this._postsFolder = 'imgprojstart';
    this._smallImageSuffix = '2';
    this._smallImageMultiplier = 0.6;
    this._smallAspectRatio = 4 / 3;

    this._postsPlaceholderFolder = 'imgproj';
    this._placeholderFileSuffix = '';

    this._imageFileExtension = 'webp';
    this._outputImageQuality = 90;
    this._resizeOptions = {
      width: 1071,
      height: 459,
    };
    this._outputImageSize = 1;

    this._outputVariableName = 'imagePlaceholders';
    this._outputFilename = 'image-placeholders';
    this._outputFileExtension = 'ts';

    this._generateDefault = true;
    this._defaultDurl = defaultDataURL;
  }

  init() {
    const argv = yargs(hideBin(process.argv)).argv;
    const args = argv._;
    const mode = argv.mode;
    this.#mode = mode;
    if (mode === 'parse') {
      this.initStartDirectory();
      this.initOutputDirectory();
    } else {
      this.handleArgs(mode, args);
    }
  }

  handleArgs(mode, args) {
    switch (mode) {
      case 'base': {
        this._baseStartDirectory = `../${args[0]}`;
        console.log(`Base directory set to: ${this._baseStartDirectory}`);
        break;
      }
      case 'sub': {
        this._postsFolder = args[0];
        console.log(`Sub directory set to: ${this._postsPlaceholderFolder} within ${this._baseStartDirectory}`);
        break;
      }
      case 'out': {
        this._postsPlaceholderFolder = args[0];
        console.log(`output folder set to: ${this._postsPlaceholderFolder} within ${this._baseStartDirectory}`);
        break;
      }
      case 'wh': {
        if (args.length !== 2) {
          throw new Error(`Invalid number of arguments specified for 'wh' mode. Must be 2.`);
        }
        const width = isNum(args[0]);
        const height = isNum(args[1]);
        this._resizeOptions = { width: width, height: height };
        console.log(`Output image height and width set to: ${width}x${height}`);
        break;
      }
      case 'multiplier': {
        const num = isNum(args[0]);
        if (num <= 0 || num >= 1) {
          throw new Error(`Invalid small image multiplier specified. Must be larger than 0 and less than 1. E.g: 0.5`);
        }
        this._smallImageMultiplier = num;
        console.log(`Small image multiplier set to: ${num}`);
        break;
      }
      case 'format': {
        const format = '.' + args[0];
        if (!this.#acceptedFileExtensions.includes(format)) {
          throw new Error(`Invalid file extension specified. Must be one of: ${this.#acceptedFileExtensions.join(', ')}`);
        }
        this._imageFileExtension = args[0];
        console.log(`Image file extension set to: ${format}`);
        break;
      }
      case 'quality': {
        const num = isNum(args[0]);
        if (num <= 0 || num >= 100) {
          throw new Error(`Invalid output image quality specified. Must be larger than 0 and less than 100. E.g: 99`);
        }
        this._outputImageQuality = num;
        console.log(`Output image quality set to: ${num}`);
        break;
      }
      case 'current': {
        const baseStart = this._baseStartDirectory.slice(3);
        console.log({
          base: baseStart,
          sub: baseStart + '/' + this._postsFolder,
          output: baseStart + '/' + this._postsPlaceholderFolder,
          wh: this._resizeOptions,
          multiplier: this._smallImageMultiplier,
          format: this._imageFileExtension,
          quality: this._outputImageQuality,
        });
        break;
      }
      case 'ar': {
        const num = isNum(args[0]);
        this._smallAspectRatio = num;
        console.log(`Small image aspect ratio set to: ${num}`);
        break;
      }
      case 'help': {
        console.log(this.#helpArray.join('\n'));
        break;
      }
      default: {
        throw new Error(`Invalid mode specified. Must be one of: ${this.#acceptedModes.join(', ')}`);
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

  get smallImageMultiplier() { return this._smallImageMultiplier; }
  /**
   * @param {string} str 
   * - The multiplier for the small image size
   * - Must be a str representation of a number between 0 and 1
   * - Will be rounded toFixed(1) e.g. 0.175769 -> 0.2
   */
  set smallImageMultiplier(str) {
    const num = isNum(str);
    if (num <= 0 || num >= 1) {
      throw new Error(`Invalid small image multiplier specified. Must be larger than 0 and less than 1. E.g: 0.5`);
    }
    this._smallImageMultiplier = value;
  }

  get smallAspectRatio() { return this._smallAspectRatio; }
  set smallAspectRatio(value) {
    const num = isNum(value);
    this._smallAspectRatio = num;
  }

  get smallImageSuffix() { return this._smallImageSuffix; }
  set smallImageSuffix(value) {
    if (typeof value !== 'string') {
      throw new Error(`Invalid small image suffix specified. Must be a string.`);
    }
    this._smallImageSuffix = value;
  }

  get resizeOptions() { return this._resizeOptions; }
  set resizeOptions(value) {
    const { width, height, fit, position } = value;
  }

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
const mode = config.mode;

async function createImagePlaceholder() {
  const postsDirectory = config.postsDirectory;
  const placeholderDirectory = config.placeholdersDirectory;
  const acceptedFileExtensions = config.acceptedImageFileExtensions;
  const placeholderSuffix = config.placeholderFileSuffix;
  const imageFileExtension = config.imageFileExtension;
  const desiredQuality = config.outputImageQuality;
  const { width, height } = config.resizeOptions;
  const smallImgSuffix = config.smallImageSuffix;
  const smallImgMult = config.smallImageMultiplier;
  const smallImgAspectRatio = config.smallAspectRatio;
  const smallHeight = 540;
  const smallWidth = 720;
  // const smallHeight = Math.round(height * smallImgMult);
  // const smallWidth = Math.round(smallImgAspectRatio * smallHeight);
  // console.log(smallWidth, smallHeight);

  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(placeholderDirectory, { recursive: true });
  }
  const files = fs.readdirSync(postsDirectory);
  const imageFiles = files.filter(file => acceptedFileExtensions.some(ext => file.endsWith(ext)));

  const tasks = imageFiles.map(async (imageFile) => {
    const inputImagePath = path.join(postsDirectory, imageFile);
    const imageNameWithoutExt = path.basename(imageFile, path.extname(imageFile));

    const isSmall = imageNameWithoutExt.match(new RegExp(`${smallImgSuffix}$`)) !== null;
    const resizeOptions = {
      width: isSmall ? smallWidth : width,
      height: isSmall ? smallHeight : height,
      position: 'top'
    };

    const outputImagePath = path.join(
      placeholderDirectory, `${imageNameWithoutExt}${placeholderSuffix}.${imageFileExtension}`
    );

    const imageMetadata = await sharp(inputImagePath).metadata();
    if (imageMetadata.width && imageMetadata.height) {
      const img = sharp(inputImagePath);
      img.resize(resizeOptions)
        .normalise()
        .modulate({
          brightness: 1.1,
          saturation: 1.1,
          lightness: .9,
        })
        .toBuffer()
        .then((data) => {
          return sharp(data)
            .webp({
              quality: desiredQuality,
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

const init = () => {
  if (mode === 'parse') {
    createImagePlaceholder().catch(err => console.error("PLACEHOLDER processing error:", err));
  }
};

init();
