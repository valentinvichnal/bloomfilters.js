// Environment
global = window;
Buffer = buffer.Buffer;
hashAlgo = XXH;

function random () {
	var array = new Uint32Array(1);
	window.crypto.getRandomValues(array);
	var rnd = array[0].toString(16);
	return (rnd.length % 2 == 1) ? random() : rnd;
};

var LN2Squared = Math.LN2 * Math.LN2;

