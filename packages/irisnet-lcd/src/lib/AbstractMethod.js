const fetch = require('isomorphic-fetch')
class AbstractMethod {
    /**
     * @param {String} path
     *
     * @constructor
     */
    constructor(host,path,option = {},respType) {
        this.path = path;
        this.option = option;
        this._host = host;
        this._respType = respType;
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(param) {}

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

    /**
     * Checks which command should be executed
     *
     * @method execute
     *
     *
     * @returns {Promise<Object|String>|String}
     */
    execute(param) {
        this.beforeExecution(param);
        let url = this._host + this.path;
        return fetch(url,this.option).then(response => {
            if (response.status === 200) {
                let result = '';
                if(this._respType === 'text'){
                    result = response.text();
                }else{
                    result = response.json();
                }
                return this.afterExecution(result);
            }
        });
    }
}

module.exports = AbstractMethod;