const AbstractMethod = require('../../lib/AbstractMethod');
class GetTxMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/txs/{hash}');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(param) {
        if(!param || param[0] === ''){
            throw new Error("tx hash must not be empty")
        }
        this.path = this.path.replace('{hash}',param[0])

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

module.exports = GetTxMethod;