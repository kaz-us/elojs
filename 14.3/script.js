var cat = document.querySelector(".message #cat");
var hat = document.querySelector(".message #hat");
var catangle = 0, lastTime = null;
var hatangle = 180;
var displacex = document.documentElement.clientWidth/3;
var displacey = document.documentElement.clientHeight/3;
function animate(time) {
  if (lastTime != null) {
    catangle += (time - lastTime) * 0.001;
    hatangle += (time - lastTime) * 0.001;
    }
  lastTime = time;
  cat.style.top = displacey+(Math.sin(catangle) * 20) + "px";
  cat.style.left = displacex+(Math.cos(catangle) * 200) + "px";
  hat.style.top = displacey + (Math.sin(hatangle) * 20) + "px";
  hat.style.left = displacex + (Math.cos(hatangle) * 200) + "px";
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);