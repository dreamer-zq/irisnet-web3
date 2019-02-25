const {MethodProxy,Method} = require('./method/MethodProxy');

class Lcd {
    /**
     *
     * @constructor
     */
    constructor(host) {
        let proxy = new MethodProxy(host);
        this.tm = {
            getNodeInfo :() => {
                return proxy.execute(Method.GetNodeInfoMethod);
            },

            getBlock :(param) => {
                return proxy.execute(Method.GetBlockMethod,param);
            },

            getNodeState :() => {
                return proxy.execute(Method.GetNodeStateMethod);
            },

            getValidators :(param) => {
                return proxy.execute(Method.GetValidatorSetMethod,param);
            },

            getTx :(hash) => {
                return proxy.execute(Method.GetTxMethod,hash);
            }
        };

        this.bank = {
            broadcast :(tx) => {
                return proxy.execute(Method.BroadcastTxMethod,tx);
            },

            getCoinType :(coinType) => {
                return proxy.execute(Method.CoinTypeMethod,coinType);
            },

            getTokenStats :() => {
                return proxy.execute(Method.TokenStatsMethod);
            },

            getAccount :(address) => {
                return proxy.execute(Method.GetAccountMethod,address);
            },

            getBalance :(address) => {
                return proxy.execute(Method.GetBalanceMethod,address);
            }
        };

        this.stake = {
            getAllDelegations : (delAddr) => {
                return proxy.execute(Method.GetAllDelegationMethod,delAddr);
            },

            getAllUbd : (delAddr) => {
                return proxy.execute(Method.GetAllUbdMethod,delAddr);
            },

            getReDelegationsFromDel : (delAddr) => {
                return proxy.execute(Method.GetRedelegationByDelMethod,delAddr);
            },

            getValidatorsByDel : (delAddr) => {
                return proxy.execute(Method.GetValidatorsByDelMethod,delAddr);
            },

            getValidatorsByDelAndVal : (delAddr,valAddr) => {
                return proxy.execute(Method.GetValidatorsByDelAndValMethod,delAddr,valAddr);
            },

            getStakeTxsByDel : (delAddr) => {
                return proxy.execute(Method.GetStakeTxsByDel,delAddr);
            },

            getDelegationsByDelAndVal : (delAddr,valAddr) => {
                return proxy.execute(Method.GetDelegationsByDelAndValMethod,delAddr,valAddr);
            },

            getUbdByDelAndVal : (delAddr,valAddr) => {
                return proxy.execute(Method.GetUbdByDelAndValMethod,delAddr,valAddr);
            },

            getValidators : () => {
                return proxy.execute(Method.GetValidatorsMethod);
            },

            getValidatorByAddr : (valAddr) => {
                return proxy.execute(Method.GetValidatorsByValMethod,valAddr);
            },

            getDelegationsByVal : (valAddr) => {
                return proxy.execute(Method.GetDelegationsByValMethod,valAddr);
            },

            getUbdByVal : (valAddr) => {
                return proxy.execute(Method.GetUbdByValMethod,valAddr);
            },

            getRedelegationByVal : (valAddr) => {
                return proxy.execute(Method.GetRedelegationByValMethod,valAddr);
            },

            getPoolState : () => {
                return proxy.execute(Method.GetPoolStateMethod);
            },

            getParameters : () => {
                return proxy.execute(Method.GetParametersMethod);
            },
        };

        this.gov = {
            getProposals : (voter,depositor,status,limit) => {
                return proxy.execute(Method.GetProposalsMethod,voter,depositor,status,limit);
            },

            getDeposits : (proposalId) => {
                return proxy.execute(Method.GetDepositsMethod,proposalId);
            },

            getVotes : (proposalId) => {
                return proxy.execute(Method.GetVotesMethod,proposalId);
            },

            getProposal : (proposalId) => {
                return proxy.execute(Method.GetProposalMethod,proposalId);
            },

            getDepositsByAddr : (proposalId,depositor) => {
                return proxy.execute(Method.GetDepositsByAddrMethod,proposalId,depositor);
            },

            getVotesByAddr : (proposalId,voter) => {
                return proxy.execute(Method.GetVotesByAddrMethod,proposalId,voter);
            },

            getParams : () => {
                return proxy.execute(Method.GetParamsMethod);
            },
        };

        this.slash = {
            getSignInfo : (valPubKey) => {
                return proxy.execute(Method.GetSignInfoMethod,valPubKey);
            }
        };

        this.distr = {
            getDistrInfoByDelAndVal : (delAddr,valAddr) => {
                return proxy.execute(Method.GetDistrInfoByDelAndValMethod,delAddr,valAddr);
            },

            getDistrInfos : (delAddr) => {
                return proxy.execute(Method.GetDistrInfosMethod,delAddr);
            },

            getValDistrInfo : (valAddr) => {
                return proxy.execute(Method.GetValDistrInfoMethod,valAddr);
            }
        };

        this.version = {
            getNodeVersion : () => {
                return proxy.execute(Method.GetNodeVersionMethod);
            },

            getLcdVersion : () => {
                return proxy.execute(Method.GeLcdVersionMethod);
            },
        }
    }
}

module.exports = Lcd;