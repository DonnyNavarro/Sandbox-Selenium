// Selenium Training per https://ultra.guide/bin/view/Automation/WebBrowserAutomationWithSeleniumAndNodeJS

const selenium = require("selenium-webdriver");
const driver = new selenium.Builder().forBrowser("chrome").build(); 
const url = "file:///Users/dnavarro/dev/Sandbox-Selenium/Test%20Site/index.html"
googleUrl = "http://www.google.com";

// Open the browser and navigate to google
driver.get(googleUrl);

// // End Selenium Session
// driver.close();
