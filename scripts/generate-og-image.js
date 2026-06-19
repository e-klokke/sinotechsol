const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function generateOGImage() {
  const svgPath = path.join(__dirname, "..", "public", "og-image.svg");
  const pngPath = path.join(__dirname, "..", "public", "og-image.png");

  console.log("Converting og-image.svg to og-image.png...");

  try {
    await sharp(svgPath, { density: 300 })
      .resize(1200, 630)
      .png()
      .toFile(pngPath);

    console.log("✓ OpenGraph image generated successfully at public/og-image.png");
  } catch (error) {
    console.error("Error generating OG image:", error);
    process.exit(1);
  }
}

generateOGImage();
