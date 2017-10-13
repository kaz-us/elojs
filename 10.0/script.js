var line = `
searchengine=http://www.google.com/search?q=$1
spitefulness=9.7
; перед комментариями ставится точка с запятой
; каждая секция относится к отдельному врагу
[larry]
fullname=Larry Doe
type=бычара из детсада
website=http://www.geocities.com/CapeCanaveral/11451
[gargamel]
fullname=Gargamel
type=злой волшебник
outputdir=/home/marijn/enemies/gargamel`

function parseINI(string) {
    var currentSection = { name: null, fields: [] };
    var categories = [currentSection];
    string.split(/\r?\n/).forEach(function (line) {
        var match;
        if (/^\s*(;.*)?$/.test(line)) {
            return;
        } else if (match = line.match(/^\[(.*)\]$/)) {
            currentSection = { name: match[1], fields: [] };
            categories.push(currentSection);
        } else if (match = line.match(/^(\w+)=(.*)$/)) {
            currentSection.fields.push({
                name: match[1],
                value: match[2]
            });
        } else {
            throw new Error("Строчка '" + line + "' содержит неверные данные.");
        }
    });
    return categories;
}
console.log(parseINI(line));
