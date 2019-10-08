
### `Intro`
![GitHub Actions status | linter](https://github.com/anzerr/totp.util/workflows/linter/badge.svg)
![GitHub Actions status | publish](https://github.com/anzerr/totp.util/workflows/publish/badge.svg)
![GitHub Actions status | test](https://github.com/anzerr/totp.util/workflows/test/badge.svg)

Totp util base on [rfc6238](https://tools.ietf.org/html/rfc6238) for two step authentication

#### `Install`
``` bash
npm install --save git+https://git@github.com/anzerr/totp.util.git
npm install --save @anzerr/totp.util
```

### `Example`
Both examples works with [google authentication](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2). [Online example](https://anzerr.github.io/demo/#totp) or a console version can be found in [test/example.js](https://github.com/anzerr/totp.util/blob/master/test/example.js)
``` javascript
const {Totp} = require('totp.util');

let t = new Totp('12345678901234567890');
console.log(t.get());

let gen = Totp.generate();
console.log(gen.key.toString(), gen.get());
```