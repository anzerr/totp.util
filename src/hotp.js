
const crypto = require('crypto'),
	util = require('./util.js');

class Hotp {

	get key() {
		return this._key;
	}

	constructor(key, hash = 'sha1') {
		if (!util.size[hash]) {
			throw new Error(`invalid hash type "${hash}" valid are ${Object.keys(util.hash).join(', ')}`);
		}
		if (typeof key !== 'string') {
			throw new Error('key should be a string');
		}
		this._key = Buffer.from(''.padStart(util.size[hash], key));
		this._hash = hash;
	}

	get(t, size = 6) {
		let hmac = crypto.createHmac(this._hash, this._key);
		hmac.update(util.getInt(t));
		hmac = hmac.digest('hex');
		const offset = parseInt(hmac[hmac.length - 1], 16),
			otp = (parseInt(hmac.substr(offset * 2, 8), 16) & 0x7fffffff).toString();
		return otp.substr(otp.length - size, size);
	}

}
Hotp.generate = (length = 20) => {
	const map = {
		[util.size.sha1]: 'sha1',
		[util.size.sha256]: 'sha256',
		[util.size.sha512]: 'sha512',
	};
	return new Hotp(util.random(length), map[length]);
};

module.exports = Hotp;
