function asTabs(node) {
    var tabs = document.createElement('div');
    [].forEach.call(node.children, function(divElem) {
      divElem.style.display = 'none';
      var button = document.createElement('button');
      button.innerHTML = divElem.getAttribute('data-tabname');
      
      button.addEventListener('click', function () {        
        [].forEach.call(node.querySelectorAll('div'), function (el, i) {
          if (i ==0) return;
          el.style.display = 'none';
          if (el.getAttribute('data-tabname') == button.innerHTML) el.style.display = 'block';
        });
        [].forEach.call(tabs.children, function(element) {
          element.style.background = '';
        });        
        button.style.background = 'gold';       
      })
      tabs.appendChild(button);
    });    
    node.insertBefore(tabs, node.firstChild);
    node.children[1].style.display = 'block';
  }
  asTabs(document.querySelector("#wrapper"));