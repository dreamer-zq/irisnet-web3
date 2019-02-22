const AbstractMethod = require('../../lib/AbstractMethod');
class ValidatorSetMethod extends AbstractMethod{
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
        if(param && Number.isInteger(param[0])){
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

module.exports = ValidatorSetMethod;