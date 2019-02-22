const AbstractMethod = require('../../lib/AbstractMethod');
class BlockMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/blocks/{param}');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(param) {
        if(param && Number.isInteger(param[0])){
            this.path = this.path.replace('{param}',param[0])
        }else {
            this.path = this.path.replace('{param}','latest')
        }
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

module.exports = BlockMethod;