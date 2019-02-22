const AbstractMethod = require('../../lib/AbstractMethod');
class GetDistrInfosMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/distribution/{delAddr}/distrInfos');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(params) {
        if(!params || params.length !== 1
            || params[0] === ''){
            throw Error('delAddr must not be empty')
        }
        this.path = this.path.replace('{delAddr}',params[0])
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

module.exports = GetDistrInfosMethod;