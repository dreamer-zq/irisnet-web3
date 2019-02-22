const AbstractMethod = require('../../lib/AbstractMethod');
class BroadcastTxMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/tx/broadcast',{
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body:{}
        });
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(param) {
        if(!param || param === 0){
            throw Error('param tx is undefined')
        }
        let tx = param[0].tx;
        if(!tx.msg || tx.msg.length === 0){
            throw Error('tx.msg must be greater than zero')
        }
        if(!tx.fee || tx.fee.amount.length === 0){
            throw Error('tx.fee must be greater than zero')
        }
        if(!tx.signatures || tx.signatures.length === 0){
            throw Error('tx.signatures must be not empty')
        }
        this.option.body = JSON.stringify(param)
    }


    /**
     * This method will be executed after the RPC request.
     *
     * @method afterExecution
     *
     * @param {*} response
     *
     * @returns {*}
     */
    afterExecution(response) {
        return response.then( data => {
            if(data.check_tx && data.check_tx.code > 0){
                throw new Error(data.check_tx.log)
            }
            if(data.deliver_tx && data.deliver_tx.code > 0){
                throw new Error(data.deliver_tx.log)
            }
            return response.hash
        });
    }
}

module.exports = BroadcastTxMethod;