var x = 0;
var y = 0;
var gap = 5.0;
var min_size = 3;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255);
  cursor(CROSS);

  x = mouseX;
  y = mouseY;

  noStroke();
  fill(0);
}

function draw() {
  if (mouseIsPressed) {
    var d = dist(x, y, mouseX, mouseY);
    var size = min_size + d / 2;
    gap = size;

    if (d > gap) {
      var angle = atan2(mouseY - y, mouseX - x);
      ellipse(x, y, size, size);

      x = x + cos(angle) * gap;
      y = y + sin(angle) * gap;
    }
  }
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
}

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
}