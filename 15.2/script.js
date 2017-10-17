addEventListener ('mousemove', function (event) {
    document.querySelector ('.message').innerHTML = 'X: '+event.pageX+' Y: '+event.pageY;
    var trace = document.createElement ("div");
    trace.className = 'trail';
    trace.style.left = (event.pageX - 4) + "px";
    trace.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(trace);
    setInterval (function () {
        if (trace.parentNode) trace.parentNode.removeChild(trace);
    }, 300);
});