const AbstractMethod = require('../../lib/AbstractMethod');
class GetRedelegationByDelMethod extends AbstractMethod{
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
    beforeExecution(param) {
        if(!param || param.length === 0){
            throw Error('delAddr must be not empty')
        }
        this.path = this.path.replace('{delAddr}',param[0])
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

module.exports = GetRedelegationByDelMethod;