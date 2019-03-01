const chai = require('chai');
const Lcd = require('../src/index');

const expect = chai.expect;
const assert = chai.assert;


describe('TmModule Test', function () {
    let lcd = new Lcd('http://192.168.150.7:30317');

    describe('tm module Test', function () {
        it('test getNodeInfo', function () {
            lcd.tm.getNodeInfo().then(data => {
                expect(data).to.be.an('object');
            }).catch(err => {
                err.then(data => {
                    console.log('getNodeInfo',err);
                });
            })
        });

        it('test getBlock', function () {
            lcd.tm.getBlock().then(data => {
                expect(data).to.be.an('object');
            }).catch(err => {
                err.then(data => {
                    console.log('getBlock',err);
                });
            })
        });

        it('test getTx', function () {
            lcd.tm.getTx('61EE65387A1848D292D0208B6A488D09568E3F06BB66C7D50C190A517EC9AFA5').then(data => {
                expect(data.hash).equal('61EE65387A1848D292D0208B6A488D09568E3F06BB66C7D50C190A517EC9AFA5')
            }).catch(err => {
                err.then(data => {
                    console.log('getTx',err);
                });
            })
        });
    });

    describe('bank module Test', function () {
        it('test broadcast', function () {
            let tx = {"tx":{"msg":[{"type":"irishub/bank/Send","value":{"type":"irishub/bank/Send","inputs":[{"address":"faa1ljemm0yznz58qxxs8xyak7fashcfxf5lssn6jm","coins":[{"denom":"iris-atto","amount":"10000000000000000000"}]}],"outputs":[{"address":"faa1eqvkfthtrr93g4p9qspp54w6dtjtrn279vcmpn","coins":[{"denom":"iris-atto","amount":"10000000000000000000"}]}]}}],"fee":{"amount":[{"denom":"iris-atto","amount":"1200000000000000000"}],"gas":"20000"},"signatures":[{"pub_key":{"type":"tendermint/PubKeySecp256k1","value":"Atu8+OXAdnE5z6Hm39xBdBcYP2ad235ThAwe6XMd4m/d"},"signature":"JT0/nEDElnaqYDpUUB4tsW/a14sHdJjgpMp1XDE0Ftxyg0MAJhUmgqIkzOKphzIqhI7aG5OnqEkYhEKFq9xQfg==","account_number":"4","sequence":"2"}],"memo":"1"}};

            lcd.bank.broadcast(tx,true).then(data => {
                assert.isNotNull(data.hash)
            }).catch(err => {
                err.then(data => {
                    console.log('broadcast',err);
                });
            })
        });

        it('test getCoinType', function () {
            lcd.bank.getCoinType('iris').then(data => {
                assert.equal(data.name,'iris')
            }).catch(err => {
                err.then(data => {
                    console.log('getCoinType',err);
                });
            })
        });

        it('test getTokenStats', function () {
            lcd.bank.getTokenStats().then(data => {
                assert.isObject(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getTokenStats',err);
                });
            })
        });

        it('test getAccount', function () {
            lcd.bank.getAccount('faa1ljemm0yznz58qxxs8xyak7fashcfxf5lssn6jm').then(data => {
                assert.isObject(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getAccount',err);
                });
            })
        });

        it('test getBalance', function () {
            lcd.bank.getBalance('faa1ljemm0yznz58qxxs8xyak7fashcfxf5lssn6jm').then(data => {
                assert.isArray(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getBalance',err);
                });
            })
        });
    });

    describe('stake module Test', function () {
        it('test getAllDelegations', function () {
            lcd.stake.getAllDelegations('faa1k7qa96sr8r2u8lgwg88y24rfmtkyd6alns8zrw').then(data => {
                assert.isArray(data)
                return data
            }).catch(err => {
                err.then(data => {
                    console.log('getAllDelegations',err);
                });
            })
        });
        it('test getAllUbd', function () {
            lcd.stake.getAllUbd('faa1k7qa96sr8r2u8lgwg88y24rfmtkyd6alns8zrw').then(data => {
                assert.isArray(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getAllUbd',err);
                });
            })
        });

        it('test getValidatorsByDelAndVal', function () {
            lcd.stake.getValidatorsByDelAndVal('faa1k7qa96sr8r2u8lgwg88y24rfmtkyd6alns8zrw','fva19s3t99fpwt657run9fjl03sqqaw3chlvxs22vf').then(data => {
                assert.isObject(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getValidatorsByDelAndVal',err);
                });
            })
        });
        it('test getValidatorsByDel', function () {
            lcd.stake.getValidatorsByDel('faa1eqvkfthtrr93g4p9qspp54w6dtjtrn279vcmpn').then(data => {
                assert.isArray(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getValidatorsByDel',err);
                });
            })
        });

        it('test getStakeTxsByDel', function () {
            lcd.stake.getStakeTxsByDel('faa1eqvkfthtrr93g4p9qspp54w6dtjtrn279vcmpn').then(data => {
                assert.isArray(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getStakeTxsByDel',err);
                });
            })
        });

        it('test getDelegationsByDelAndVal', function () {
            lcd.stake.getDelegationsByDelAndVal('faa1eqvkfthtrr93g4p9qspp54w6dtjtrn279vcmpn','fva107kadfra85jplpqzmp8xpw2k5jmkexjkegveku').then(data => {
                assert.isNotNull(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getDelegationsByDelAndVal',err);
                });
            })
        });

        it('test getUbdByDelAndVal', function () {
            lcd.stake.getUbdByDelAndVal('faa1eqvkfthtrr93g4p9qspp54w6dtjtrn279vcmpn','fva107kadfra85jplpqzmp8xpw2k5jmkexjkegveku').then(data => {
                assert.isArray(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getUbdByDelAndVal',err);
                });
            })
        });

        it('test getValidators', function () {
            lcd.stake.getValidators().then(data => {
                assert.isArray(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getValidators',err);
                });
            })
        });
        it('test getValidatorByAddr', function () {
            lcd.stake.getValidatorByAddr('fva107kadfra85jplpqzmp8xpw2k5jmkexjkegveku').then(data => {
                assert.isNotNull(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getValidatorByAddr',err);
                });
            })
        });
        it('test getDelegationsByVal', function () {
            lcd.stake.getDelegationsByVal('fva107kadfra85jplpqzmp8xpw2k5jmkexjkegveku').then(data => {
                assert.isArray(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getDelegationsByVal',err);
                });
            })
        });
        it('test getUbdByVal', function () {
            lcd.stake.getUbdByVal('fva107kadfra85jplpqzmp8xpw2k5jmkexjkegveku').then(data => {
                assert.isArray(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getUbdByVal',err);
                });
            })
        });
        it('test getRedelegationByVal', function () {
            lcd.stake.getRedelegationByVal('fva107kadfra85jplpqzmp8xpw2k5jmkexjkegveku').then(data => {
                assert.isArray(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getRedelegationByVal',err);
                });
            })
        });
        it('test getPoolState', function () {
            lcd.stake.getPoolState().then(data => {
                assert.isNotNull(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getPoolState',err);
                });
            })
        });
        it('test getParameters', function () {
            lcd.stake.getParameters().then(data => {
                assert.isNotNull(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getParameters',err);
                });
            })
        });
    });

    describe('gov module Test', function () {
        it('test getProposals', function () {
            lcd.gov.getProposals().then(data => {
                assert.isArray(data)
            }).catch(err => {
                err.then(data => {
                    console.log('getProposals',err);
                });
            })
        });
    });

    describe('slash module Test', function () {

    });

    describe('version module Test', function () {
        it('test getLcdVersion', function () {
            lcd.version.getLcdVersion().then(data => {
                assert.isNotNull(data)
            }).catch(err => {
                console.log('getLcdVersion',err);
                return err
            })
        });
    });
});