
const crypto = require('crypto');

const CHAR = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';

class Util {

	constructor() {
		this.size = {
			sha1: 20,
			sha256: 32,
			sha512: 64
		};
	}

	getInt(n) {
		let buff = Buffer.alloc(8);
		for (let i = 0; i < 8; i++) {
			buff[7 - i] = n & 0xff;
			n = n >> 8;
		}
		return buff;
	}

	random(length) {
		const bytes = crypto.randomBytes(length);

		let output = '';
		for (let i = 0, l = bytes.length; i < l; i++) {
			output += CHAR[Math.floor(bytes[i] / 255 * (CHAR.length - 1))];
		}
		return output;
	}

}

module.exports = new Util();
