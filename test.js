var fs    = require("fs");
var jsontest = JSON.parse(fs.readFileSync('C:/Users/n.berthet/Documents/GitHub/ppav/config/websites.json', 'utf8'));


for( var website in jsontest ) {
    for( var property in jsontest[website] ) {
        console.log(jsontest[website][property].ssl);
    }
}
