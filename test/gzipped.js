var assert = require('assert');
var gzipped = require('..');
var fs = require('fs');

describe('gzipped', function () {
  describe('.calculate', function () {
    it('calculates the compression statistics for a readable stream', function (done) {
      var stream = fs.createReadStream('file.txt');

      gzipped.calculate(stream, function (err, data) {
        assert.equal(err, null);
        assert.equal(data.original, 446);
        assert.equal(data.compressed, 287);
        assert.equal(data.ratio, 287 / 446);
        done();
      });
    });
  });
});