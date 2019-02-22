const chai = require('chai');
const Web3 = require('../src/Web3');


describe('TmModule Test', function () {
    let web3 = new Web3('http://192.168.150.7:30317');

    describe('tm module Test', function () {
        it('test NodeInfoMethod', function () {
            web3.lcd.tm.getNodeInfo().then(data => {
                console.log(JSON.stringify(data))
            })
        });

        it('test GetBlock', function () {
            web3.lcd.tm.getBlock().then(data => {
                console.log(JSON.stringify(data))
            })
        });

        it('test GetTx', function () {
            web3.lcd.tm.getTx('61EE65387A1848D292D0208B6A488D09568E3F06BB66C7D50C190A517EC9AFA5').then(data => {
                console.log(data)
            })
        });
    });
});