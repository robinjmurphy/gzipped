var zlib = require('zlib');

function calculate(buffer, cb) {
  var gzipped = zlib.gzip(buffer, function (err, gzipped) {
    if (err) return cb(err);

    cb(null, {
      original: buffer.length,
      compressed: gzipped.length,
      ratio: gzipped.length / buffer.length
    });
  });
}

module.exports.calculate = function (stream, cb) {
  var buffers = [];

  stream.on('data', function (data) {
    buffers.push(data);
  });

  stream.on('end', function () {
    calculate(Buffer.concat(buffers), cb);
  });

  stream.on('error', function (err) {
    cb(err);
  });
};