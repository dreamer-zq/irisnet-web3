const AbstractMethod = require('../../lib/AbstractMethod');
class GetDepositsByAddrMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/gov/proposals/{pid}/deposits/{depositor}');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(params) {
        if(!params || params.length !==2 || !Number.isInteger(params[0])){
            throw Error('proposalId  must be integer')
        }
        this.path = this.path.replace('{pid}',params[0]).replace('{depositor}',params[1])
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

module.exports = GetDepositsByAddrMethod;