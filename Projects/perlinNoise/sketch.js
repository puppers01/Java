let inc = 0.1;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      pixels[index + 0] = random(255);
      pixels[index + 1] = 0;
      pixels[index + 2] = 0;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}