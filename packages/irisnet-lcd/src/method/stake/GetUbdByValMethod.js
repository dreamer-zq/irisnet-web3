const AbstractMethod = require('../../lib/AbstractMethod');
class GetUbdByDelAndValMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/stake/delegators/{delAddr}/unbonding_delegations/{valAddr}');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(param) {
        if(!param || param.length < 2){
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

module.exports = GetUbdByDelAndValMethod;