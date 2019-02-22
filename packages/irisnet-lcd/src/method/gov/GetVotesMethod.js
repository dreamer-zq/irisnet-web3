const AbstractMethod = require('../../lib/AbstractMethod');
class GetVotesMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/gov/proposals/{pid}/votes');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(param) {
        if(!param || !Number.isInteger(param[0])){
            throw Error('proposalId  must be integer')
        }
        this.path = this.path.replace('{pid}',param[0])
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

module.exports = GetVotesMethod;