const AbstractMethod = require('../../lib/AbstractMethod');
class GetDistrInfoByDelAndValMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/distribution/{delAddr}/distrInfo/{valAddr}');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(params) {
        if(!params || params.length !== 2
            || params[0] === '' || params[1] === ''){
            throw Error('delAddr and valAddr  must not be empty')
        }
        this.path = this.path.replace('{delAddr}',params[0]).replace('{valAddr}',params[1])
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

module.exports = GetDistrInfoByDelAndValMethod;