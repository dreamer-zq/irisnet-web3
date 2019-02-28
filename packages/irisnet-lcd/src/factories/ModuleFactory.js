const AbstractModuleFactory = require('../lib/AbstractModuleFactory');
const GetNodeInfoMethod = require('../method/tm/GetNodeInfoMethod');
const GetBlockMethod = require('../method/tm/GetBlockMethod');
const GetNodeStateMethod = require('../method/tm/GetNodeStateMethod');
const GetValidatorSetMethod = require('../method/tm/GetValidatorSetMethod');
const GetTxMethod = require('../method/tm/GetTxMethod');
const BroadcastTxMethod = require('../method/bank/BroadcastTxMethod');
const GetCoinTypeMethod = require('../method/bank/GetCoinTypeMethod');
const GetTokenStatsMethod = require('../method/bank/GetTokenStatsMethod');
const GetAccountMethod = require('../method/bank/GetAccountMethod');
const GetBalanceMethod = require('../method/bank/GetBalanceMethod');
const GetAllDelegationMethod = require('../method/stake/GetAllDelegationMethod');
const GetAllUbdMethod = require('../method/stake/GetAllUbdMethod');
const GetRedelegationByDelMethod = require('../method/stake/GetRedelegationByDelMethod');
const GetValidatorsByDelMethod = require('../method/stake/GetValidatorsByDelMethod');
const GetValidatorsByDelAndValMethod = require('../method/stake/GetValidatorsByDelAndValMethod');
const GetStakeTxsByDel = require('../method/stake/GetStakeTxsByDel');
const GetDelegationsByDelAndValMethod = require('../method/stake/GetDelegationsByDelAndValMethod');
const GetUbdByDelAndValMethod = require('../method/stake/GetUbdByDelAndValMethod');
const GetValidatorsMethod = require('../method/stake/GetValidatorsMethod');
const GetValidatorsByValMethod = require('../method/stake/GetValidatorsByValMethod');
const GetDelegationsByValMethod = require('../method/stake/GetDelegationsByValMethod');
const GetUbdByValMethod = require('../method/stake/GetUbdByValMethod');
const GetRedelegationByValMethod = require('../method/stake/GetRedelegationByValMethod');
const GetPoolStateMethod = require('../method/stake/GetPoolStateMethod');
const GetParametersMethod = require('../method/stake/GetParametersMethod');
const GetProposalsMethod = require('../method/gov/GetProposalsMethod');
const GetDepositsMethod = require('../method/gov/GetDepositsMethod');
const GetVotesMethod = require('../method/gov/GetVotesMethod');
const GetProposalMethod = require('../method/gov/GetProposalMethod');
const GetDepositsByAddrMethod = require('../method/gov/GetDepositsByAddrMethod');
const GetVotesByAddrMethod = require('../method/gov/GetVotesByAddrMethod');
const GetParamsMethod = require('../method/gov/GetParamsMethod');
const GetSignInfoMethod = require('../method/slash/GetSignInfoMethod');
const GetDistrInfoByDelAndValMethod = require('../method/distr/GetDistrInfoByDelAndValMethod');
const GetDistrInfosMethod = require('../method/distr/GetDistrInfosMethod');
const GetValDistrInfoMethod = require('../method/distr/GetValDistrInfoMethod');
const GetNodeVersionMethod = require('../method/version/GetNodeVersionMethod');
const GeLcdVersionMethod = require('../method/version/GeLcdVersionMethod');


class TmModuleFactory extends AbstractModuleFactory {
    constructor(host) {
        super(host);
        this.methods = {
            getNodeInfo: GetNodeInfoMethod,
            getBlock: GetBlockMethod,
            getNodeState: GetNodeStateMethod,
            getValidators: GetValidatorSetMethod,
            getTx: GetTxMethod,
        }
    }
}

class BankModuleFactory extends AbstractModuleFactory {
    constructor(host) {
        super(host);
        this.methods = {
            broadcast: BroadcastTxMethod,
            getCoinType: GetCoinTypeMethod,
            getTokenStats: GetTokenStatsMethod,
            getAccount: GetAccountMethod,
            getBalance: GetBalanceMethod,
        }
    }
}

class StakeModuleFactory extends AbstractModuleFactory {
    constructor(host) {
        super(host);
        this.methods = {
            getAllDelegations: GetAllDelegationMethod,
            getAllUbd: GetAllUbdMethod,
            getReDelegationsByDel: GetRedelegationByDelMethod,
            getValidatorsByDel: GetValidatorsByDelMethod,
            getValidatorsByDelAndVal: GetValidatorsByDelAndValMethod,
            getStakeTxsByDel: GetStakeTxsByDel,
            getDelegationsByDelAndVal: GetDelegationsByDelAndValMethod,
            getUbdByDelAndVal: GetUbdByDelAndValMethod,
            getValidators: GetValidatorsMethod,
            getValidatorByAddr: GetValidatorsByValMethod,
            getDelegationsByVal: GetDelegationsByValMethod,
            getUbdByVal: GetUbdByValMethod,
            getRedelegationByVal: GetRedelegationByValMethod,
            getPoolState: GetPoolStateMethod,
            getParameters: GetParametersMethod,
        }
    }
}
class GovModuleFactory extends AbstractModuleFactory {
    constructor(host) {
        super(host);
        this.methods = {
            getProposals: GetProposalsMethod,
            getDeposits: GetDepositsMethod,
            getVotes: GetVotesMethod,
            getProposal: GetProposalMethod,
            getDepositsByAddr: GetDepositsByAddrMethod,
            getVotesByAddr: GetVotesByAddrMethod,
            getParams: GetParamsMethod,
        }
    }
}

class DistrModuleFactory extends AbstractModuleFactory {
    constructor(host) {
        super(host);
        this.methods = {
            getDistrInfoByDelAndVal: GetDistrInfoByDelAndValMethod,
            getDistrInfos: GetDistrInfosMethod,
            getValDistrInfo: GetValDistrInfoMethod,
        }
    }
}

class SlashModuleFactory extends AbstractModuleFactory {
    constructor(host) {
        super(host);
        this.methods = {
            getSignInfo: GetSignInfoMethod
        }
    }
}


class VersionModuleFactory extends AbstractModuleFactory {
    constructor(host) {
        super(host);
        this.methods = {
            getNodeVersion: GetNodeVersionMethod,
            getLcdVersion: GeLcdVersionMethod,
        }
    }
}

module.exports = {TmModuleFactory,BankModuleFactory,DistrModuleFactory,GovModuleFactory,SlashModuleFactory,StakeModuleFactory,VersionModuleFactory};