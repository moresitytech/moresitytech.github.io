const path = require("path");
const Jimp = require("jimp");

(async () => {
  const inPath = path.resolve(__dirname, "../public/logo3.png");
  const outPath = path.resolve(__dirname, "../public/logo3-transparent.png");

  console.log("Reading", inPath);
  const img = await Jimp.read(inPath);
  img.rgba(true);
  const { width: w, height: h } = img.bitmap;

  function rgba(int) {
    return Jimp.intToRGBA(int);
  }

  const corners = [
    rgba(img.getPixelColor(0, 0)),
    rgba(img.getPixelColor(w - 1, 0)),
    rgba(img.getPixelColor(0, h - 1)),
    rgba(img.getPixelColor(w - 1, h - 1)),
  ];

  const avg = corners.reduce((acc, c) => ({ r: acc.r + c.r, g: acc.g + c.g, b: acc.b + c.b }), {
    r: 0,
    g: 0,
    b: 0,
  });
  avg.r = Math.round(avg.r / corners.length);
  avg.g = Math.round(avg.g / corners.length);
  avg.b = Math.round(avg.b / corners.length);

  const threshold = 60; // tweakable, lower = stricter

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const p = rgba(img.getPixelColor(x, y));
      const dist = Math.sqrt(
        (p.r - avg.r) * (p.r - avg.r) +
          (p.g - avg.g) * (p.g - avg.g) +
          (p.b - avg.b) * (p.b - avg.b),
      );
      if (dist < threshold) {
        // keep color but set alpha to 0
        img.setPixelColor(Jimp.rgbaToInt(p.r, p.g, p.b, 0), x, y);
      }
    }
  }

  await img.writeAsync(outPath);
  console.log("Wrote", outPath);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
