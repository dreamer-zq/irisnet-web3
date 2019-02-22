const AbstractMethod = require('../../lib/AbstractMethod');
class GetBalanceMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/bank/balances/{address}');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(params) {
        if(!params || params.length === 0 || params[0] === ''){
            throw Error('address must not be empty')
        }
        this.path = this.path.replace('{address}',params[0])
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

module.exports = GetBalanceMethod;