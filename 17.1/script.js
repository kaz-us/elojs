var req = new XMLHttpRequest();
req.open("GET", "http://eloquentjavascript.net/author/", true);
req.setRequestHeader('Accept', 'application/rainbows+unicorns');
req.addEventListener("load", _=> {console.log(req.responseText);});
req.send(null);