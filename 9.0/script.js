function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Недопустимое направление: " + result);
}

function look() {
  if (promptDirection("Куда?") == "L")
    return "дом";
  else
    return "двух разъярённых медведей";
}
try {
  console.log("Вы видите", look());
} catch (error) {
  console.log("Что-то не так: " + error);
}