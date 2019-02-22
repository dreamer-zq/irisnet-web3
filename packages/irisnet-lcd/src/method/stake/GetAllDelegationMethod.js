const AbstractMethod = require('../../lib/AbstractMethod');
class GetDelegationMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'stake/delegators/{delAddr}/delegations');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(coinType) {
        if(!coinType){
            throw Error('coin-type must be not empty')
        }
        this.path = this.path.replace('{coin-type}',coinType)
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

module.exports = GetDelegationMethod;