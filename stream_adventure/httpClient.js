// Send an HTTP POST request to http://localhost:8099 and pipe process.stdin into
// it. Pipe the response stream to process.stdout.

// The `r` object that you get back from `request.post()` is a readable+writable
// stream so you can pipe a readable stream into it (`src.pipe(r)`) and you can
// pipe it to a writable stream (`r.pipe(dst)`).

// You can even chain both steps together: src.pipe(r).pipe(dst);

// Hint: for your code, src will be process.stdin and dst will be process.stdout.


var request = require('request');

var r = request.post('http://localhost:8099/');
var src = process.stdin;
var dst = process.stdout;
src.pipe(r).pipe(dst);