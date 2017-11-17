var terms = [];
for (var name in window)
    terms.push(name);

let input = document.querySelector("#field");
let output = document.querySelector("#suggestions");

input.addEventListener("input", ch => {
    while (output.lastChild) {
        output.removeChild(output.lastChild);
    };
    let sugg = terms.filter(str => {
        return (str.slice(0, input.value.length) === input.value.toLowerCase());
    });
    sugg.forEach(elem => {
        var p = document.createElement('p');
        p.innerHTML = elem;
        output.appendChild(p);
    })

    let psugg = document.querySelectorAll("p");
    for (let i = 0; i < psugg.length; i++) {
        psugg[i].addEventListener("click", _ => {
            input.value = psugg[i].innerHTML;
            while (output.lastChild) {
                output.removeChild(output.lastChild);
            };
        });
    }
});
