const AbstractMethod = require('../../lib/AbstractMethod');
class ValidatorSet extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/validatorsets/{param}');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(param) {
        if(Number.isInteger(param)){
            this.path = this.path.replace('{param}',param)
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