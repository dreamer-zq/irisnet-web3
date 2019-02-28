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
    beforeExecution(params) {
        let tx = params[0].tx;
        if(!tx.msg || tx.msg.length === 0){
            throw Error('tx.msg must be greater than zero')
        }
        if(!tx.fee || tx.fee.amount.length === 0){
            throw Error('tx.fee must be greater than zero')
        }
        if(!tx.signatures || tx.signatures.length === 0){
            throw Error('tx.signatures must be not empty')
        }
        this.option.body = JSON.stringify(params[0]);

        let async = params[1] || false;
        let simulate = params[2] || false;
        this.path = `${this.path}?async=${async}&simulate=${simulate}`

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
        return response;
    }
}

module.exports = BroadcastTxMethod;