const Lcd = require('../../irisnet-lcd/src/index');

class Web3 {
   constructor(host){
       this.lcd = new Lcd(host)
   }
}

module.exports = Web3;