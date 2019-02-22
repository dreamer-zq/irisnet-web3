const AbstractMethod = require('../../lib/AbstractMethod');
class CoinTypeMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/bank/coin/{coin-type}');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(param) {
        if(!param || param === 0){
            throw Error('coin-type must not be empty')
        }
        this.path = this.path.replace('{coin-type}',param[0])
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

module.exports = CoinTypeMethod;