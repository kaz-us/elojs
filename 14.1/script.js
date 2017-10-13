var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
  ];

function buildTable(data) {
    var result  = document.createElement('table');
    var headers = Object.keys(data[0]);
    var columns = headers.length;
    var tr = document.createElement('tr');
    for (var i = 0; i < columns; i++) {
      let th = document.createElement('th')
      th.appendChild(document.createTextNode(headers[i]));
      tr.appendChild(th);
    }
    result.appendChild(tr);

    for (var i = 0; i < data.length; i++) {
      var tr = document.createElement('tr');
        for (var k = 0; k < columns; k++) {
          var td = document.createElement('td');
          if (k==1) {
            td.style.textAlign = 'right';
            td.style.color = 'lime';          
          }
          td.appendChild(document.createTextNode(data[i][headers[k]]));
          tr.appendChild(td);
        }
        result.appendChild(tr);      
    }
    return (result);
  }

document.body.appendChild(buildTable(MOUNTAINS));