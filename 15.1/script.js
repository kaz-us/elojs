var field = document.querySelector("input");
// Your code here.

field.addEventListener("keydown", function (event) {
    var keyPressedCode = event.keyCode
    if (keyPressedCode == 81||keyPressedCode == 87||keyPressedCode == 88) timeout();
    function timeout () {
        setTimeout(function() {
        field.value = field.value.slice(0,-1);
      }, 10);
      console.log ('Введён недопустимый символ: '+String.fromCharCode(keyPressedCode));
    }
})