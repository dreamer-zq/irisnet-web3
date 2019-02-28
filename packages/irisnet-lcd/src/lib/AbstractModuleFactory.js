
/**
 * @file AbstractModuleFactory.js
 */

class AbstractModuleFactory {
    /**
     * @param {string} host
     *
     * @constructor
     */
    constructor(host) {
        this._host = host;
        this._methods = null;
    }

    /**
     * Gets the methods object
     *
     * @property methods
     *
     * @returns {null|Object}
     */
    get methods() {
        if (this._methods) {
            return this._methods;
        }

        throw new Error('No methods defined for MethodFactory!');
    }

    /**
     * Sets the methods object
     *
     * @property methods
     *
     * @param {Object} value
     */
    set methods(value) {
        this._methods = value;
    }

    /**
     * Checks if the method exists
     *
     * @method hasMethodModel
     *
     * @param {String} name
     *
     * @returns {Boolean}
     */
    hasMethod(name) {
        return typeof this.methods[name] !== 'undefined';
    }

    /**
     *
     * Returns an MethodModel
     *
     * @param {String} name
     *
     * @returns {AbstractMethod}
     */
    createMethod(name) {
        if (this.hasMethod(name)){
            const method = this.methods[name];
            return new method(this._host);
        }
    }
}
module.exports = AbstractModuleFactory;

