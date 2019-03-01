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
        this.tm = new TmModuleFactory(host).createModule();
        this.bank = new BankModuleFactory(host).createModule();
        this.stake = new StakeModuleFactory(host).createModule();
        this.gov = new GovModuleFactory(host).createModule();
        this.slash = new SlashModuleFactory(host).createModule();
        this.distr = new DistrModuleFactory(host).createModule();
        this.version = new VersionModuleFactory(host).createModule();
    }
}

module.exports = Lcd;