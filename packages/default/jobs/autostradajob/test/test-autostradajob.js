var assert = require ('assert');
var autostradajobSUT = require('../autostradajob');

var mockedConfig, mockedDependencies;

describe ('autostradajob test', function(){

  beforeEach(function (done) {
    
    mockedConfig = {
      globalAuth: {
        myconfigKey: {
          username: "myusername",
          password: "secretpassword"
        }
      },
      interval: 20000
    };

    mockedDependencies = {
      logger: console,
      easyRequest : {
        JSON : function (options, cb) {
          cb(null, {});
        }
      }
    };

    done();
  });

  describe ('http request example tests', function(){
    it('should handle server errors', function (done){

      mockedDependencies.easyRequest.JSON = function (options, cb){
        var testdata = require('./testdata.json');
        //console.log(testdata)
        cb(null, testdata);
      };

      var config = {};
      autostradajobSUT.onRun(config, mockedDependencies, function(err, data){
        console.log(data.activities)
        //assert.equal('hello from google', data.html, 'expected a different reply from google: ' + data.html);
        done();
      });
    });
  });

});
