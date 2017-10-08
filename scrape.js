var casper = require('casper').create();
var fs = require('fs');
var baseUrl = 'http://localhost:4200/';
var pages = [
  '',
  'program',
  'paydaslar',
  'neden',
  'belgeler',
];

casper.on('error', function(msg) {
  // this.capture('error.png');
  console.log(msg);
  this.die(msg);
});

casper.on("remote.message", function(msg) {
  console.log("Console: " + msg);
});

casper.on("page.error", function(msg, trace) {
  console.log("Error: " + msg);
});

function scrapeContent() {
  const content = this.getPageContent();
  console.log(this.getCurrentUrl());
  const pageUrl = this.getCurrentUrl();
  var pageUri;

  if (pageUrl === baseUrl) {
    pageUri = 'index.html';
  } else {
    pageUri = pageUrl.replace(baseUrl, '');
  }

  console.log(pageUri);

  fs.write('dist/static/' + pageUri, content, 'w');
}

casper.start(pages[0], scrapeContent);

for (var page in pages) {
  if (page === 0) continue;
  casper.thenOpen(baseUrl + pages[page], scrapeContent);
}

casper.run();
