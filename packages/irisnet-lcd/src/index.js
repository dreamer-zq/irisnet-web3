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
        this.tm = new ModuleProxy(new TmModuleFactory(host));
        this.bank = new ModuleProxy(new BankModuleFactory(host));
        this.stake = new ModuleProxy(new StakeModuleFactory(host));
        this.gov = new ModuleProxy(new GovModuleFactory(host));
        this.slash = new ModuleProxy(new SlashModuleFactory(host));
        this.distr = new ModuleProxy(new DistrModuleFactory(host));
        this.version = new ModuleProxy(new VersionModuleFactory(host))
    }
}

module.exports = Lcd;