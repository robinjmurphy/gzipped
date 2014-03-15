var ReadableStream = require('stream').Readable;
var filesize = require('filesize');
var colors = require('chalk');
var zlib = require('zlib');

function displayStats(original, compressed, ratio) {
  console.log(colors.yellow('Original size:'), colors.green(filesize(original)));
  console.log(colors.yellow('Compressed size:'), colors.green(filesize(compressed)));
  console.log(colors.yellow('Compression ratio:'), colors.green((ratio * 100).toFixed(2) + '%'));
}

function calculate(buffer) {
  var gzipped = zlib.gzip(buffer, function (err, gzipped) {
    if (err) throw err;
    
    displayStats(buffer.length, gzipped.length, buffer.length / gzipped.length);
  });
}

module.exports.calculate = function (stream) {
  var buffer = [];

  stream.on('data', function (data) {
    buffer.push(data);
  });

  stream.on('end', function () {
    calculate(Buffer.concat(buffer));
  });
};