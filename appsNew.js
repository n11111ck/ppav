// Requirements

var Monitor = require('C:/Users/n.berthet/Documents/GitHub/ppav/lib/monitor');

var fs = require("fs");


// Parse config

var pictureparks = JSON.parse(fs.readFileSync('C:/Users/n.berthet/Documents/GitHub/ppav/config/pictureparks.json', 'utf8'));

// Start Monitoring Instance for every Picturepark in the config file

for(var i = 0; i < pictureparks["pictureparks"].length; i++)
  {

    var ppMonitor = new Monitor ({

      address:              pictureparks["pictureparks"][i].address,
      timeout:              pictureparks["pictureparks"][i].timeout,
      responsiveness:       pictureparks["pictureparks"][i].responsiveness,
      ssl:                  pictureparks["pictureparks"][i].ssl,
      interval:             pictureparks["pictureparks"][i].interval


    });
  }
