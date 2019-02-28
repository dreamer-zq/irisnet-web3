const AbstractMethod = require('../../lib/AbstractMethod');
class GetProposalsMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/gov/proposals');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(params) {
        let path = this.path;
        if(!params){
            return
        }

        let voter = params[0] || '';
        let depositor = params[1] || '';
        let status = params[2] || '';
        let limit = params[3] || '';

        if (voter === '' && depositor === '' && status === '' && limit === ''){
            return
        }
        path = path + "?";
        if (voter !== ''){
            path = path + `voter=${voter}&`
        }
        if (depositor !== ''){
            path = path + `depositor=${depositor}&`
        }
        if (status !== ''){
            path = path + `status=${status}&`
        }
        if (limit !== ''){
            path = path + `limit=${limit}&`
        }
        this.path = path;
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

module.exports = GetProposalsMethod;