var results = [
  {name: "Удовлетворён", count: 1043, color: "lightblue"},
  {name: "Нейтральное", count: 1563, color: "lightgreen"},
  {name: "Не удовлетворён", count: 910, color: "pink"},
  {name: "Без комментариев", count: 2175, color: "silver"}
];

var cx = document.querySelector("canvas").getContext("2d");
var total = results.reduce(function(sum, choice) {
  return sum + choice.count;
}, 0);

var currentAngle = -0.5 * Math.PI;
var centerX = 300, centerY = 150;
var textAngle;
// Добавьте код для вывода меток
results.forEach(function(result) {
  var sliceAngle = (result.count / total) * 2 * Math.PI;
  cx.beginPath();
  cx.arc(centerX, centerY, 100,
         currentAngle, currentAngle + sliceAngle);
  textAngle = currentAngle+sliceAngle/2;
  currentAngle += sliceAngle;
  cx.lineTo(centerX, centerY);
  cx.fillStyle = result.color;
  cx.fill();
  cx.strokeStyle = "fuchsia";
  if ((textAngle/Math.PI) > 0.5) cx.textAlign = "end";
  cx.strokeText(result.name, centerX+105*Math.cos(textAngle), centerY+105*Math.sin(textAngle));
  });