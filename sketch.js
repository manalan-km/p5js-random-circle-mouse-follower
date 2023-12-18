function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  fill(0);
  stroke(255);
  circle(mouseX, mouseY, random(50));
}

function mouseClicked() {
  clear();
  setup();
}
