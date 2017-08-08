var https = require('https');

module.exports = function getHTML (options, callback) {

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      // Listening for event to occur, 'data' is event.
      // When data occurs give function that data.
      callback(data);
    });
    response.on('end', function(data) {
    });
  })
}