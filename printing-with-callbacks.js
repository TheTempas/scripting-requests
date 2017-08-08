var https = require('https');

function getHTML (options, callback) {

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

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)