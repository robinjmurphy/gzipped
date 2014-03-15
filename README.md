# gzipped

Calculates the GZIP compression savings for plain text strings.

## Installation

```sh
npm install -g gzipped
```

## Usage

```sh
cat file.txt
```

Outputs:

```sh
Original size: 446 B
Compressed size: 287 B
Compression ratio: 64.35%
```

### Usage with `STDIN`

The tool supports input from `STDIN`, allowing you to get stats for a file:

```sh
cat file.txt | gzipped
```

A remote resource:

```sh
curl http://www.example.com | gzipped
```

From the clipboard:

```sh
pbpaste | gzipped
```