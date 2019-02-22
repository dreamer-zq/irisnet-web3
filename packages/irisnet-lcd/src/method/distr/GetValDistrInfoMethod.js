const AbstractMethod = require('../../lib/AbstractMethod');
class GetValDistrInfoMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/distribution/{valAddr}/valDistrInfo');
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
            throw Error('valAddr  must not be empty')
        }
        this.path = this.path.replace('{valAddr}',params[0])
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

module.exports = GetValDistrInfoMethod;