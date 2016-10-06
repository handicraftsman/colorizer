var img;

// ss=50, where x - square size
// bs=x/2, where y - border size
//
// sx=11, where sx - squares(X)
// sy=1, where sy - squares(Y)
// So:
// ix = ss + ss*sx = 50 + 50*11 = 50 + 550 = 600
// iy = ss + ss*sy = 50

var img_x, img_y;
var square_size = 50;
var border_size = square_size/2;
var squares_x = 11;
var squares_y = 1;

var img;
var context;

var font = "15px Fira Mono"

var sqx, sqy, sqw, sqh;

function getColorFromId(name) {
  return $("#"+name).css("background-color");
};

function getTxColorFromId(name) {
  return $("#"+name).css("color");
}

function getBrColorFromId(name) {
  return $("#"+name).css("border-color");
}

function genCanvas() {
  img = document.getElementById("themeimg");
  context = img.getContext("2d");
  context.font = font;
};

function calculateImgSize() {
  img_x = square_size + square_size*squares_x + border_size;
  img_y = square_size + square_size*squares_y + border_size;
  $("#themeimg").attr({
    "height": img_y,
    "width": img_x
  });
};

function calculateSquare(x, y) {
  sqx = border_size + (square_size * (x-1));
  sqw = sqx + square_size;

  sqy = border_size + (square_size * (y-1));
  sqh = sqy + square_size;
};

function fillBG() {
  context.fillStyle = getColorFromId("c-bg");
  context.fillRect(0, 0, img_x, img_y);
};

function drawURL() {
  context.fillStyle = getTxColorFromId("c-bg");
  context.fillText("https://github.com/handicraftsman/colorizer/", 1, 15);
};

function fillRect() {
  context.fillRect(sqx, sqy, sqw, sqh);
}

function drawBoxes() {
  // DARK
  context.fillStyle = getColorFromId("c-d5");
  calculateSquare(1, 1)
  fillRect();

  context.fillStyle = getColorFromId("c-d4");
  calculateSquare(2, 1);
  fillRect();

  context.fillStyle = getColorFromId("c-d3");
  calculateSquare(3, 1);
  fillRect();

  context.fillStyle = getColorFromId("c-d2");
  calculateSquare(4, 1);
  fillRect();

  context.fillStyle = getColorFromId("c-d1");
  calculateSquare(5, 1);
  fillRect();

  // NORMAL
  context.fillStyle = getColorFromId("c-nr");
  calculateSquare(6, 1);
  fillRect();

  // LIGHT
  context.fillStyle = getColorFromId("c-l1");
  calculateSquare(7, 1);
  fillRect();

  context.fillStyle = getColorFromId("c-l2");
  calculateSquare(8, 1);
  fillRect();

  context.fillStyle = getColorFromId("c-l3");
  calculateSquare(9, 1);
  fillRect();

  context.fillStyle = getColorFromId("c-l4");
  calculateSquare(10, 1);
  fillRect();

  context.fillStyle = getColorFromId("c-l5");
  calculateSquare(11, 1);
  fillRect();
}

$(document).ready(function() {
  $("#genImgBtn").click(function() {
    $("#themeimg").css("display", "block");
    calculateImgSize();
    genCanvas();
    fillBG();
    drawURL();
    drawBoxes();
  });
});
