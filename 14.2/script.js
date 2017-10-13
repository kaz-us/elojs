
function byTagName(node, tagName) {
    var tags = {};
    
    function searchTag(element) {
        if (element.tagName.toLowerCase() in tags) tags[element.tagName.toLowerCase()].push(element);
        else tags[element.tagName.toLowerCase()] = [element];
        
        for (let i = 0; i < element.children.length; i++) {
            
            if (element.children.length) searchTag (element.children[i]);
        }
    }
    searchTag(node);
    return tags[tagName];
  }

console.log(document.getElementsByTagName('body'));
console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
var para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2
