const ModuleProxy = require('./proxy/ModuleProxy');
const {
    TmModuleFactory,
    BankModuleFactory,
    DistrModuleFactory,
    GovModuleFactory,
    SlashModuleFactory,
    StakeModuleFactory,
    VersionModuleFactory
} = require('./factories/ModuleFactory');

class Lcd {
    /**
     *
     * @constructor
     */
    constructor(host) {
        this.tm = new ModuleProxy(host, new TmModuleFactory(host));
        this.bank = new ModuleProxy(host, new BankModuleFactory(host));
        this.stake = new ModuleProxy(host, new StakeModuleFactory(host));
        this.gov = new ModuleProxy(host, new GovModuleFactory(host));
        this.slash = new ModuleProxy(host, new SlashModuleFactory(host));
        this.distr = new ModuleProxy(host, new DistrModuleFactory(host));
        this.version = new ModuleProxy(host, new VersionModuleFactory(host))
    }
}

module.exports = Lcd;