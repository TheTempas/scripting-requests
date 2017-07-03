var https = require('https');
var output = '';

function getAndPrintHTML () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

      response.on('data', function (data) {
        output += data;
        console.log(data);
      });
      response.on('end', function(data) {
      });
  })
}
getAndPrintHTML();