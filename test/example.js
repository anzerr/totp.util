
const {b32} = require('base.util'),
	{Totp} = require('../index.js'),
	Qr = require('qr.util');

console.log(b32.decode('JBSWY3DPEHPK3PXP'));
const gen = new Totp('12345678901234567890'), o = {
	name: `totp.util${Math.random().toString(36)}`,
	from: 'totp.util',
	secret: gen.key
};

// key format can be found at https://github.com/google/google-authenticator/wiki/Key-Uri-Format
let qr = new Qr(`otpauth://totp/${o.name}?secret=${b32.encode(o.secret, true)}&issuer=${o.from}`);
console.log(qr.toConsole(true));

let last = null;
setInterval(() => {
	const cur = gen.get();
	if (last !== cur) {
		last = cur;
		console.log('current value: ', last);
	}
}, 200);
