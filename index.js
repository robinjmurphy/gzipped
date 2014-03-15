var ReadableStream = require('stream').Readable;
var WritableStream = require('stream').Writable;
var filesize = require('filesize');
var colors = require('chalk');
var zlib = require('zlib');
var calculator = new WritableStream();

function displayStats(original, compressed, ratio) {
  console.log(colors.yellow('Original size:'), colors.green(filesize(original)));
  console.log(colors.yellow('Compressed size:'), colors.green(filesize(compressed)));
  console.log(colors.yellow('Compression ratio:'), colors.green((ratio * 100).toFixed(2) + '%'));
}

calculator._write = function (chunk, encoding) {
  var gzipped = zlib.gzip(chunk, function (err, gzipped) {
    var original = chunk.length;
    var compressed = gzipped.length;
    var ratio = compressed / original;

    displayStats(original, compressed, ratio);
  });
};

module.exports.calculate = function (stream) {
  stream.pipe(calculator);
};