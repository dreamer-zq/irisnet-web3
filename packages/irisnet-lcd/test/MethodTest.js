const chai = require('chai');
const Lcd = require('../src/index');

const expect = chai.expect;
const assert = chai.assert;


describe('TmModule Test', function () {
    let lcd = new Lcd('http://192.168.150.7:30317');

    describe('tm module Test', function () {
        it('test NodeInfoMethod', function () {
            lcd.tm.getNodeInfo().then(data => {
                expect(data).to.be.an('object');
            })
        });

        it('test GetBlock', function () {
            lcd.tm.getBlock().then(data => {
                expect(data).to.be.an('object');
            })
        });

        it('test GetTx', function () {
            lcd.tm.getTx('61EE65387A1848D292D0208B6A488D09568E3F06BB66C7D50C190A517EC9AFA5').then(data => {
                expect(data.hash).equal('61EE65387A1848D292D0208B6A488D09568E3F06BB66C7D50C190A517EC9AFA5')
            })
        });
    });

    describe('bank module Test', function () {
        it('test broadcast', function () {
            let tx = {"tx":{"msg":[{"type":"irishub/bank/Send","value":{"type":"irishub/bank/Send","inputs":[{"address":"faa1ljemm0yznz58qxxs8xyak7fashcfxf5lssn6jm","coins":[{"denom":"iris-atto","amount":"10000000000000000000"}]}],"outputs":[{"address":"faa1eqvkfthtrr93g4p9qspp54w6dtjtrn279vcmpn","coins":[{"denom":"iris-atto","amount":"10000000000000000000"}]}]}}],"fee":{"amount":[{"denom":"iris-atto","amount":"1200000000000000000"}],"gas":"20000"},"signatures":[{"pub_key":{"type":"tendermint/PubKeySecp256k1","value":"Atu8+OXAdnE5z6Hm39xBdBcYP2ad235ThAwe6XMd4m/d"},"signature":"JT0/nEDElnaqYDpUUB4tsW/a14sHdJjgpMp1XDE0Ftxyg0MAJhUmgqIkzOKphzIqhI7aG5OnqEkYhEKFq9xQfg==","account_number":"4","sequence":"2"}],"memo":"1"}};

            lcd.bank.broadcast(tx).then(data => {
                assert.notEqual(data.hash,'')
            }).catch(err => {
                let errMsg = err.message;
                assert.notEqual(errMsg,'')
            })
        });

        it('test getCoinType', function () {
            lcd.bank.getCoinType('iris').then(data => {
                console.log(JSON.stringify(data))
            })
        });

        it('test getTokenStats', function () {
            lcd.bank.getTokenStats().then(data => {
                console.log(JSON.stringify(data))
            })
        });

        it('test getAccount', function () {
            lcd.bank.getAccount('faa1ljemm0yznz58qxxs8xyak7fashcfxf5lssn6jm').then(data => {
                console.log(JSON.stringify(data))
            })
        });

        it('test getBalance', function () {
            lcd.bank.getBalance('faa1ljemm0yznz58qxxs8xyak7fashcfxf5lssn6jm').then(data => {
                console.log(JSON.stringify(data))
            })
        });
    });

    describe('stake module Test', function () {
        it('test getAllDelegations', function () {
            lcd.stake.getAllDelegations('faa1k7qa96sr8r2u8lgwg88y24rfmtkyd6alns8zrw').then(data => {
                console.log(JSON.stringify(data))
            })
        });
        it('test getAllUbd', function () {
            lcd.stake.getAllUbd('faa1k7qa96sr8r2u8lgwg88y24rfmtkyd6alns8zrw').then(data => {
                console.log(JSON.stringify(data))
            })
        });

        it('test getValidatorsByDelAndVal', function () {
            lcd.stake.getValidatorsByDelAndVal('faa1k7qa96sr8r2u8lgwg88y24rfmtkyd6alns8zrw','fva19s3t99fpwt657run9fjl03sqqaw3chlvxs22vf').then(data => {
                console.log(JSON.stringify(data))
            })
        });
    });

    describe('gov module Test', function () {

    });

    describe('slash module Test', function () {

    });

    describe('version module Test', function () {
        it('test getLcdVersion', function () {
            lcd.version.getLcdVersion().then(data => {
                console.log(data)
            })
        });
    });
});