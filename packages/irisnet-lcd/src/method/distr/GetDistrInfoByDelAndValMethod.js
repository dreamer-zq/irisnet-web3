const AbstractMethod = require('../../lib/AbstractMethod');
class GetSignInfoMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/slashing/validators/{valPubKey}/signing_info');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(params) {
        if(!params || params[0] === ''){
            throw Error('valPubKey  must not be empty')
        }
        this.path = this.path.replace('{valPubKey}',params[0])
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

module.exports = GetSignInfoMethod;