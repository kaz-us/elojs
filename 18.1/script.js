let button = document.querySelector("#button");
let code = document.querySelector("#code");
let output = document.querySelector("#output");



button.addEventListener("click" , _ => {
    let result="";
    try {
        result = new Function("", code.value);
        output.innerHTML = result();
    } catch (error) {
       output.innerHTML = error.message;       
    }
});