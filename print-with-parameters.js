var https = require('https');
var aVariable = '';

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      aVariable += data;
    });
    response.on('end', function(data) {
      console.log(aVariable);
    });
  })
}

getAndPrintHTML(requestOptions);