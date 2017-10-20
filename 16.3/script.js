var cx = document.querySelector("canvas").getContext("2d");
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
  var lastTime = null;
  function frame(time) {
    if (lastTime != null)
      updateAnimation(Math.min(100, time - lastTime) / 1000);
    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  var spriteW = 100;
  var spriteH = 100;
  var x = 0;
  var y = 50;
  var up, left = false;
  var speed = 100;

  function updateAnimation(step) {
    var img = document.createElement("img");
    img.src = "img/ball.png";

    img.addEventListener("load", function () {

        if (y >= 400 - spriteH) up = true;
        if (y <= 0) up = false;
        if (x >= 600 - spriteW) left = true;
        if (x <= 0) left = false;
        step*=speed;
        up ? y-=step : y+=step;
        left ? x-=step : x+=step;
        cx.clearRect(0, 0, 600, 400);
        cx.drawImage(img, x, y, spriteW, spriteH);

    });
    lines(100);
  }
