class ImageFilterPlugin {
  constructor(validImages, options = {}) {
    this.validImages = validImages instanceof Set
      ? validImages
      : new Set(validImages);
    this.options = {
      verbose: false,
      // pass src directories to filter images from using validImages provided @constructor
      // searches file.name
      // sourceDirectories are assumed to be in the 'images' directory
      sourceDirectories: ['imgproj'],
      // pass preloaded images to ignore
      preloadedImages: [],
      ...options
    };
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('ImageFilterPlugin', (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: 'ImageFilterPlugin',
          stage: compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE
        },
        (assets) => {
          Object.keys(assets).forEach(filename => {
            const asset = compilation.getAsset(filename);
            if (!asset || !asset.info || !asset.info.sourceFilename) return;

            const sourcePath = asset.info.sourceFilename;
            const shouldCheck = this.options.sourceDirectories.some(dir =>
              sourcePath.includes(`/images/${dir}/`)
            );

            if (shouldCheck && /\.(ico|svg|png|webp|avif|jpg|pdf)$/i.test(filename)) {
              const baseName = filename.split('/').pop().split('.')[0].split('-')[0];

              const isPreloaded = this.options.preloadedImages.some(preloadPath =>
                filename.includes(preloadPath) || baseName === preloadPath
              );

              if (!this.validImages.has(baseName) && !isPreloaded) {
                if (this.options.verbose) {
                  console.log(`🗑️  Filtering out unused image: ${filename}`);
                  console.log(`   Source: ${sourcePath}`);
                }
                delete assets[filename];
              } else if (this.options.verbose) {
                console.log(`✅ Keeping image: ${filename}`);
                console.log(`   Source: ${sourcePath}`);
              }
            }
          });
        }
      );
    });
  }
}

module.exports = ImageFilterPlugin;
