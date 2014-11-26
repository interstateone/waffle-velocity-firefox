var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: "*.waffle.io",
  contentScriptFile: [self.data.url("jquery-1.9.1.min.js"), self.data.url("./scores.js")],
  contentStyleFile: self.data.url("./style.css")
});