function setup() {
  const container = document.getElementById("fear-map-canvas");
  const w = container.offsetWidth;
  const h = container.offsetHeight;
  let canvas = createCanvas(w, h);
  canvas.parent("fear-map-canvas");
}

function draw() {
  background(240);
  fill(255, 0, 0, 150);
  ellipse(mouseX, mouseY, 30, 30); // για δοκιμή
}

function windowResized() {
  const container = document.getElementById("fear-map-canvas");
  const w = container.offsetWidth;
  const h = container.offsetHeight;
  resizeCanvas(w, h);
}
