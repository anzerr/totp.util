
### `Intro`
![GitHub Actions status | linter](https://github.com/anzerr/totp.util/workflows/linter/badge.svg)
![GitHub Actions status | publish](https://github.com/anzerr/totp.util/workflows/publish/badge.svg)
![GitHub Actions status | test](https://github.com/anzerr/totp.util/workflows/test/badge.svg)

Copy a directory or file to a location

#### `Install`
``` bash
npm install --save git+https://git@github.com/anzerr/totp.util.git
npm install --save @anzerr/totp.util
```

### `Example`
``` javascript
const {Totp} = require('totp.util');

let t = new Totp('12345678901234567890');
console.log(t.get());

let gen = Totp.generate();
console.log(gen.key.toString(), gen.get());
```