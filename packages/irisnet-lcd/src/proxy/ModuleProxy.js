class ModuleProxy {
    /**
     *
     * @constructor
     * @param {AbstractModuleFactory} moduleFactory
     */
    constructor(moduleFactory) {
        return new Proxy(this, {
            get: (target, name) => {
                if (moduleFactory.hasMethod(name)) {
                    const method = moduleFactory.createMethod(name);
                    let fn = function (...args) {
                        return method.execute(args);
                    };
                    return fn;
                }
                return target[name];
            }
        })
    }
}

module.exports = ModuleProxy;