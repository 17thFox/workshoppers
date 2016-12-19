// Instead of transforming every line as in the previous "TRANSFORM" example,
// for this challenge, convert even-numbered lines to upper-case and odd-numbered
// lines to lower-case. Consider the first line to be odd-numbered.

// You can use the `split` module to split input by newlines. 

// `split` will buffer chunks on newlines before you get them. In the previous
// example, we will get separate events for each line even though all the data
// probably arrives on the same chunk:


// Your own program should use `split` in this way, but you should transform the
// input and pipe the output through to `process.stdout`.


var through = require('through2');
var split = require('split');
var i = 0;

var input = through(function write(buffer, encoding, next) {
    var myLine = buffer.toString();
    if (i % 2 === 0) {
        this.push(myLine.toLowerCase() + '\n');
        i++;
        next();
    } else {
        this.push(myLine.toUpperCase() + '\n');
        i++;
        next();
    }
});

process.stdin.pipe(split()).pipe(input).pipe(process.stdout);