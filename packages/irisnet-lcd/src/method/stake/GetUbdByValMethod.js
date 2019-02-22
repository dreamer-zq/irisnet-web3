const AbstractMethod = require('../../lib/AbstractMethod');
class GetUbdByValMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/stake/validators/{valAddr}/unbonding_delegations');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(param) {
        if(!param || param.length === 0){
            throw Error('delAddr and valAddr must be not empty')
        }
        this.path = this.path.replace('{delAddr}',param[0]).replace('{valAddr}',param[1])
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

module.exports = GetUbdByValMethod;