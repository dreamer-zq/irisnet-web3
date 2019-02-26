# irisnet-lcd

This is a sub package of [irisnet-web3][repo]

The Method module abstracts the Lcd restful api and is used within most [irisnet-web3][repo] packages.

## Installation

```bash
npm install irisnet-lcd
```

## Examples

#### import package

```js
import Lcd from 'irisnet-lcd';
const lcd = new Lcd('http://localhost:1317');
```

#### query your balance
```js
lcd.bank.getBalance('faa1ljemm0yznz58qxxs8xyak7fashcfxf5lssn6jm')
.then(data => {
   console.log(JSON.stringify(data))
})
.catch(data => {
   console.log(JSON.stringify(data))
})
```

### Requirements

* [Node.js](https://nodejs.org)
* npm

### Commands
```bash
npm run test // runs all tests 
```