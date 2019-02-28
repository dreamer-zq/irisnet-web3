const fetch = require('isomorphic-fetch')
class AbstractMethod {
    /**
     * @param {String} path
     *
     * @constructor
     */
    constructor(host,path,option = {}) {
        this._path = path;
        this._option = option;
        this._host = host;
    }

    set option(value){
        this._option = value;
    }

    get option(){
        return this._option
    }

    set path(path){
        this._path = path;
    }

    get path(){
        return this._path
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
            if (!response.ok) {
                return Promise.reject(response.text().then(msg => {
                    return msg;
                }))
            }
            let contentType = response.headers.get('content-type');
            let result = '';
            if(contentType.includes('text/plain')){
                result = response.text();
            }else if(contentType.includes('application/json')){
                result = response.json();
            }
            return this.afterExecution(result);
        }).catch(err =>{
            return Promise.reject(err)
        })
    }
}

module.exports = AbstractMethod;