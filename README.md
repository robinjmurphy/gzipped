# gzipped

[![Build Status](https://travis-ci.org/robinjmurphy/gzipped.png?branch=master)](https://travis-ci.org/robinjmurphy/gzipped) [![Code Climate](https://codeclimate.com/github/robinjmurphy/gzipped.png)](https://codeclimate.com/github/robinjmurphy/gzipped)

> Calculates [gzip](http://en.wikipedia.org/wiki/Gzip) compression savings.

## Installation

```sh
npm install -g gzipped
```

## Usage

```sh
gzipped file.txt
```

Output:

```sh
Original size: 446 B
Compressed size: 287 B
Compression ratio: 64.35%
```

You can pass in any type of file - it's not limited to plain text.

#### Usage with `STDIN`

You can also use _gzipped_ with input from `STDIN`, i.e:

```sh
cat file.txt | gzipped
```

This allows you to use it with remote resources:

```sh
curl http://www.example.com | gzipped
```

And the clipboard:

```sh
pbpaste | gzipped
```

etc.
