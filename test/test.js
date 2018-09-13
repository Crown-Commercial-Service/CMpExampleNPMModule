/**
 * Very basic tests using Mocha and Chai to show execution of tests during build
 */
var expect = require('chai').expect;
var AppConfig = require("../index.js");

console.log( "Testing AppConfig" );
var appConfig = new AppConfig();

describe('getApiURL()', function () {
  it('should return API URL', function () {
    
    var apiURL = appConfig.getApiURL("api1");

    expect(apiURL).to.be.equal("http://api1.ccsdev-internal.org");
  });
});

describe('isFeatureEnabled()', function () {
    it('should return APIfeature disabled', function () {
      
      var featureEnabled = appConfig.isFeatureEnabled("FEATURE_NOT_ENABLED");
  
      expect(featureEnabled).to.be.equal(false);
    });
  });