// An encrypted, gzipped tar file will be piped in on process.stdin. To beat this
// challenge, for each file in the tar input, print a hex-encoded md5 hash of the
// file contents followed by a single space followed by the filename, then a
// newline.

// You will receive the cipher name as process.argv[2] and the cipher passphrase as
// process.argv[3]. You can pass these arguments directly through to
// `crypto.createDecipher()`.

// The built-in zlib library you get when you `require('zlib')` has a
// `zlib.createGunzip()` that returns a stream for gunzipping.

// The `tar` module from npm has a `tar.Parse()` function that emits `'entry'`
// events for each file in the tar input. Each `entry` object is a readable stream
// of the file contents from the archive and:

// `entry.type` is the kind of file ('File', 'Directory', etc)
// `entry.path` is the file path

// Use `crypto.createHash('md5', { encoding: 'hex' })` to generate a stream that
// outputs a hex md5 hash for the content written to it.





var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var concat = require('concat-stream');


var parser = tar.Parse();
parser.on('entry', function(e) {
	var myHash = crypto.createHash('md5', { encoding: 'hex' });

	if(e.type === 'File'){
		e.pipe(myHash).pipe(concat(function(smth){
			console.log(smth + " " + e.path);
		}))
	}
});


process.stdin.pipe(crypto.createDecipher(process.argv[2], process.argv[3])).pipe(zlib.createGunzip()).pipe(parser);
