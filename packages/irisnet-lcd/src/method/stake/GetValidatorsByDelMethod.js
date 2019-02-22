const AbstractMethod = require('../../lib/AbstractMethod');
class GetRedelegationFromDelMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/stake/delegators/{delAddr}/redelegations');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(delAddr) {
        if(!delAddr){
            throw Error('delAddr must be not empty')
        }
        this.path = this.path.replace('{delAddr}',delAddr)
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

module.exports = GetRedelegationFromDelMethod;