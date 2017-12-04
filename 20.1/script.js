let http = require('http');
let request = http.request({
    hostname: "eloquentjavascript.net",
    path: "/author",
    method: "GET",
    headers: {Accept: "application/rainbows+unicorns"}
  }, response => {
      response.on ('data', answer => {
          console.log(answer.toString());
      })
  });
request.end();