
const util = require('./util.js'),
	Hotp = require('./hotp.js');

class Totp extends Hotp {

	constructor(key, hash) {
		super(key, hash);
	}

	getTime(t, size) {
		return super.get(Math.floor(t / 30), size);
	}

	get(options = {}) {
		const {size, next} = options, now = Math.round(Date.now() / 1000);
		if (next) {
			const out = [];
			for (let i = 0; i < next; i++) {
				out.push(this.getTime(now + i, size));
			}
			return out;
		}
		return this.getTime(now, size);
	}

}
Totp.generate = (length = 20) => {
	const map = {
		[util.size.sha1]: 'sha1',
		[util.size.sha256]: 'sha256',
		[util.size.sha512]: 'sha512',
	};
	return new Totp(util.random(length), map[length]);
};

module.exports = Totp;
