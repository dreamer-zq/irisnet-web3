const AbstractMethod = require('../../lib/AbstractMethod');
class GetDelegationsByValMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/stake/validators/{valAddr}/delegations');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(param) {
        if(!param || param.length === 0){
            throw Error('valAddr must be not empty')
        }
        this.path = this.path.replace('{valAddr}',param[0])
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

module.exports = GetDelegationsByValMethod;