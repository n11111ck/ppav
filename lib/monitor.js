// MONITOR

// Requires

var request = require('request')
var statusCodes = require('http').STATUS_CODES;


// Constructor

function Monitor(opts)

  {

  // holds pictureparks
  this.address = '';

  // holds timeouts
  this.timeout = '';

  // responsiveness
  this.responsiveness = '';

  // HTTPS or HTTP
  this.ssl = '';

  // Ping intervals in seconds
  this.interval = '';

  // interval handler
  this.handle = null;

  // start app

  this.init(opts);

  }

// METHODS

Monitor.prototype = {


  init: function (opts) {

    var self = this;

    self.address = opts.address;

    self.timeout = opts.timeout;

    self.responsiveness = opts.responsiveness;

    self.ssl = opts.ssl;

    self.interval = opts.interval;

  //  start monitoring

  self.start();

},


  start: function () {


    var self = this;

    console.log("\nMonitoring started:\n" + self.address + " with SSL = " + self.ssl + " in intervals of "+ self.interval +" seconds");


}

}


// Export Class

  module.exports = Monitor;
