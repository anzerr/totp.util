
const {Totp} = require('./index.js'),
	assert = require('assert');

const data = [
	{
		time: 59,
		hash: {
			sha1: '94287082',
			sha256: '46119246',
			sha512: '90693936'
		}
	},
	{
		time: 1111111109,
		hash: {
			sha1: '07081804',
			sha256: '68084774',
			sha512: '25091201'
		}
	},
	{
		time: 1111111111,
		hash: {
			sha1: '14050471',
			sha256: '67062674',
			sha512: '99943326'
		}
	},
	{
		time: 1234567890,
		hash: {
			sha1: '89005924',
			sha256: '91819424',
			sha512: '93441116'
		}
	},
	{
		time: 2000000000,
		hash: {
			sha1: '69279037',
			sha256: '90698825',
			sha512: '38618901'
		}
	},
	{
		time: 20000000000,
		hash: {
			sha1: '65353130',
			sha256: '77737706',
			sha512: '47863826'
		}
	}
];

for (let i in data) {
	for (let x in data[i].hash) {
		let t = new Totp('12345678901234567890', x);
		assert.equal(t.getTime(data[i].time, data[i].hash[x].length), data[i].hash[x]);
	}
}

let t = new Totp('12345678901234567890');
let current = t.get();
assert.notEqual(t.get().match(/^\d{6}$/), null);
assert.notEqual(t.get({size: 3}).match(/^\d{3}$/), null);
assert.equal(t.get({next: 3}).length, 3);
console.log('waiting 30 seconds for next code');
setTimeout(() => {
	assert.notEqual(t.get(), current);
}, 30 * 1000);

let gen = Totp.generate();
assert.equal(gen._hash, 'sha1');
assert.equal(Buffer.isBuffer(gen.key), true);
assert.notEqual(gen.key.toString().match(/^[a-zA-Z0-9]{20}$/), null);

gen = Totp.generate(32);
assert.equal(gen._hash, 'sha256');
assert.equal(Buffer.isBuffer(gen.key), true);
assert.notEqual(gen.key.toString().match(/^[a-zA-Z0-9]{32}$/), null);

gen = Totp.generate(64);
assert.equal(gen._hash, 'sha512');
assert.equal(Buffer.isBuffer(gen.key), true);
assert.notEqual(gen.key.toString().match(/^[a-zA-Z0-9]{64}$/), null);
