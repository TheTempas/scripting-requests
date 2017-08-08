var https = require('https');
var aVariable = '';

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};



function getHTML (options, printHTML) {

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      aVariable += data;
    });
    response.on('end', function(data) {
      printHTML(options);
    });
  })
}


function printHTML (html) {
  console.log(html);
}