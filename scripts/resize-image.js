const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

const IMAGE_WIDTH = 312;

const args = process.argv.slice(2);
const baseDir = args[0];

if (baseDir == null) {
  throw new Error("please input a valid path name");
}

const imagePath = path.resolve(baseDir);
if (!fs.existsSync(imagePath)) {
  throw new Error("invalid path");
}

// take vertical image and fit in the defined width
sharp(imagePath)
  .resize({
    height: null, // auto-scale
    width: IMAGE_WIDTH,
    fit: sharp.fit.contain,
  })
  .toFile(getOutputPath())
  .then(() => {
    console.log("Done!");
  });

// gets file name without extension
function getOutputPath() {
  const splitPath = baseDir.split("/");
  const splitName = splitPath[splitPath.length - 1].split(".");
  return `${splitName[0]}.resized.${splitName[splitName.length - 1]}`;
}
