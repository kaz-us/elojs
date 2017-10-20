let cx = document.querySelector("canvas").getContext("2d");

function trapezoid(corx, cory, a, b, h, color) {
  let x = corx;
  let y = cory;
  cx.strokeStyle = color;
    cx.beginPath();
    cx.moveTo(x, y);
    x += (a-b)/2;
    y -= h;
    cx.lineTo(x, y);
    x += b;
    cx.lineTo(x, y);
    x += (a-b)/2;
    y += h;
    cx.lineTo(x, y);
    cx.closePath();
  cx.stroke();
}

function lines (p) {
  cx.strokeStyle = 'grey';
  var x = 0;
  var y = 0;
  while (x <= cx.canvas.clientWidth) {
    cx.moveTo (x, 0);
    cx.lineTo (x, cx.canvas.clientHeight);
    cx.moveTo(0, y);
    cx.lineTo (cx.canvas.clientWidth, y);
    x += p;
    y += p;    
  }
  cx.stroke();
}

function rhomb(x, y, a, color) {
  cx.save();
  cx.fillStyle = color;
  cx.translate(x, y);
  cx.rotate(-0.25*Math.PI);
  //cx.fillRect(x-a/2, y+a/2, a, a);
  cx.fillRect(-a/2, -a/2, a, a);
  cx.restore();
}

function zigzag(x, y, length, higth, cycles, color) {
  cx.strokeStyle = color;
  cx.beginPath();
  cx.moveTo(x, y);
  for (var i = 0; i < cycles; i++) {
    y += higth;
    cx.lineTo(x+length, y-higth/2);
    cx.lineTo(x, y);
  }
  cx.stroke();  
}

function spiral(corx, cory, num, color) {
  let x = corx;
  let y = cory;
  cx.save();
  cx.strokeStyle = color;
  cx.beginPath();
  cx.translate(x, y);
  cx.moveTo(0, 0);
  for (var i = 0; i < num; i++) {
    cx.rotate(0.1*Math.sin(1)*Math.PI);
    cx.lineTo(0.6*i, 0);
  }
  cx.stroke();
  cx.restore();
}

function star(x, y, radius, color) {
  cx.strokeStyle = color;
  cx.fillStyle = color;
  cx.beginPath();
  var posX = radius*Math.cos(0);
  var posY = radius*Math.sin(0);
  console.log('0: '+posX+':'+posY)
  cx.moveTo(x+posX, y+posY);
  for (var i = 1; i < 9; i++) {
    var posX = Math.round(radius*Math.cos(0.25*i*Math.PI));
    var posY = Math.round(radius*Math.sin(0.25*i*Math.PI));
    console.log(i+': '+posX+':'+posY)
    cx.quadraticCurveTo(x, y, x+posX, y+posY);
  }
  cx.fill();
}
lines(100);
trapezoid (0, 200, 70, 40, 40, 'blue');
rhomb(130, 180, 50, 'red');
spiral(300, 180, 100, 'cyan');
zigzag(180, 150, 50, 15, 5, 'white');
star (470, 180, 60, 'orange');