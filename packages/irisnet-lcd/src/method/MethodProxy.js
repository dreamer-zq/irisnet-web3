const NodeInfoMethod = require('./tm/NodeInfoMethod');
const BlockMethod = require('./tm/BlockMethod');
const SyncingMethod = require('./tm/SyncingMethod');
const ValidatorSetMethod = require('./tm/ValidatorSetMethod');
const GetTxMethod = require('./tm/GetTxMethod');
const BroadcastTxMethod = require('./bank/BroadcastTxMethod');
const CoinTypeMethod = require('./bank/CoinTypeMethod');
const TokenStatsMethod = require('./bank/TokenStatsMethod');
const GetAccountMethod = require('./bank/GetAccountMethod');
const GetBalanceMethod = require('./bank/GetBalanceMethod');
const GetAllDelegationMethod = require('./stake/GetAllDelegationMethod');
const GetAllUbdMethod = require('./stake/GetAllUbdMethod');
const GetRedelegationByDelMethod = require('./stake/GetRedelegationByDelMethod');
const GetValidatorsByDelMethod = require('./stake/GetValidatorsByDelMethod');
const GetValidatorsByDelAndValMethod = require('./stake/GetValidatorsByDelAndValMethod');
const GetStakeTxsByDel = require('./stake/GetStakeTxsByDel');
const GetDelegationsByDelAndValMethod = require('./stake/GetDelegationsByDelAndValMethod');
const GetUbdByDelAndValMethod = require('./stake/GetUbdByDelAndValMethod');
const GetValidatorsMethod = require('./stake/GetValidatorsMethod');
const GetValidatorsByValMethod = require('./stake/GetValidatorsByValMethod');
const GetDelegationsByValMethod = require('./stake/GetDelegationsByValMethod');
const GetUbdByValMethod = require('./stake/GetUbdByValMethod');
const GetRedelegationByValMethod = require('./stake/GetRedelegationByValMethod');
const GetPoolStateMethod = require('./stake/GetPoolStateMethod');
const GetParametersMethod = require('./stake/GetParametersMethod');
const GetProposalsMethod = require('./gov/GetProposalsMethod');
const GetDepositsMethod = require('./gov/GetDepositsMethod');
const GetVotesMethod = require('./gov/GetVotesMethod');
const GetProposalMethod = require('./gov/GetProposalMethod');
const GetDepositsByAddrMethod = require('./gov/GetDepositsByAddrMethod');
const GetVotesByAddrMethod = require('./gov/GetVotesByAddrMethod');
const GetParamsMethod = require('./gov/GetParamsMethod');
const GetSignInfoMethod = require('./slash/GetSignInfoMethod');
const GetDistrInfoByDelAndValMethod = require('./distr/GetDistrInfoByDelAndValMethod');
const GetDistrInfosMethod = require('./distr/GetDistrInfosMethod');
const GetValDistrInfoMethod = require('./distr/GetValDistrInfoMethod');
const GetNodeVersionMethod = require('./version/GetNodeVersionMethod');
const GeLcdVersionMethod = require('./version/GeLcdVersionMethod');


class MethodProxy {
    /**
     *
     * @constructor
     */
    constructor(host) {
        let methods = new Map();
        //tm module
        methods.set(Method.NodeInfoMethod,new NodeInfoMethod(host));
        methods.set(Method.BlockMethod,new BlockMethod(host));
        methods.set(Method.SyncingMethod,new SyncingMethod(host));
        methods.set(Method.ValidatorSetMethod,new ValidatorSetMethod(host));
        methods.set(Method.GetTxMethod,new GetTxMethod(host));

        //bank module
        methods.set(Method.BroadcastTxMethod,new BroadcastTxMethod(host));
        methods.set(Method.CoinTypeMethod,new CoinTypeMethod(host));
        methods.set(Method.TokenStatsMethod,new TokenStatsMethod(host));
        methods.set(Method.GetAccountMethod,new GetAccountMethod(host));
        methods.set(Method.GetBalanceMethod,new GetBalanceMethod(host));

        //stake module
        methods.set(Method.GetAllDelegationMethod,new GetAllDelegationMethod(host));
        methods.set(Method.GetAllUbdMethod,new GetAllUbdMethod(host));
        methods.set(Method.GetRedelegationByDelMethod,new GetRedelegationByDelMethod(host));
        methods.set(Method.GetValidatorsByDelMethod,new GetValidatorsByDelMethod(host));
        methods.set(Method.GetValidatorsByDelAndValMethod,new GetValidatorsByDelAndValMethod(host));
        methods.set(Method.GetStakeTxsByDel,new GetStakeTxsByDel(host));
        methods.set(Method.GetDelegationsByDelAndValMethod,new GetDelegationsByDelAndValMethod(host));
        methods.set(Method.GetUbdByDelAndValMethod,new GetUbdByDelAndValMethod(host));
        methods.set(Method.GetValidatorsMethod,new GetValidatorsMethod(host));
        methods.set(Method.GetValidatorsByValMethod,new GetValidatorsByValMethod(host));
        methods.set(Method.GetDelegationsByValMethod,new GetDelegationsByValMethod(host));
        methods.set(Method.GetUbdByValMethod,new GetUbdByValMethod(host));
        methods.set(Method.GetRedelegationByValMethod,new GetRedelegationByValMethod(host));
        methods.set(Method.GetPoolStateMethod,new GetPoolStateMethod(host));
        methods.set(Method.GetParametersMethod,new GetParametersMethod(host));

        //gov module
        methods.set(Method.GetProposalsMethod,new GetProposalsMethod(host));
        methods.set(Method.GetDepositsMethod,new GetDepositsMethod(host));
        methods.set(Method.GetVotesMethod,new GetVotesMethod(host));
        methods.set(Method.GetProposalMethod,new GetProposalMethod(host));
        methods.set(Method.GetDepositsByAddrMethod,new GetDepositsByAddrMethod(host));
        methods.set(Method.GetVotesByAddrMethod,new GetVotesByAddrMethod(host));
        methods.set(Method.GetParamsMethod,new GetParamsMethod(host));

        //slash module
        methods.set(Method.GetSignInfoMethod,new GetSignInfoMethod(host));

        //distr module
        methods.set(Method.GetDistrInfoByDelAndValMethod,new GetDistrInfoByDelAndValMethod(host));
        methods.set(Method.GetDistrInfosMethod,new GetDistrInfosMethod(host));
        methods.set(Method.GetValDistrInfoMethod,new GetValDistrInfoMethod(host));

        //version module
        methods.set(Method.GetNodeVersionMethod,new GetNodeVersionMethod(host));
        methods.set(Method.GeLcdVersionMethod,new GeLcdVersionMethod(host));

        this._methods = methods;
    }

    execute(methodNm,...params){
        let method = this._methods.get(methodNm);
        if (!method){
            throw new Error(`not existed method: ${methodNm}`)
        }
        return method.execute(params)
    }
}

class Method{}
Method.NodeInfoMethod = 'NodeInfoMethod';
Method.BlockMethod = 'BlockMethod';
Method.SyncingMethod = 'SyncingMethod';
Method.ValidatorSetMethod = 'ValidatorSetMethod';
Method.GetTxMethod = 'GetTxMethod';
Method.BroadcastTxMethod = 'BroadcastTxMethod';
Method.CoinTypeMethod = 'CoinTypeMethod';
Method.GetAccountMethod = 'GetAccountMethod';
Method.TokenStatsMethod = 'TokenStatsMethod';
Method.GetAllDelegationMethod = 'GetAllDelegationMethod';
Method.GetAllUbdMethod = 'GetAllUbdMethod';
Method.GetRedelegationByDelMethod = 'GetRedelegationFromDelMethod';
Method.GetValidatorsByDelMethod = 'GetValidatorsByDelMethod';
Method.GetValidatorsByDelAndValMethod = 'GetValidatorsByDelAndValMethod';
Method.GetStakeTxsByDel = 'GetStakeTxsByDel';
Method.GetDelegationsByDelAndValMethod = 'GetDelegationsByDelAndValMethod';
Method.GetUbdByDelAndValMethod = 'GetUbdByDelAndValMethod';
Method.GetValidatorsMethod = 'GetValidatorsMethod';
Method.GetValidatorsByValMethod = 'GetValidatorsByValMethod';
Method.GetDelegationsByValMethod = 'GetDelegationsByValMethod';
Method.GetUbdByValMethod = 'GetUbdByValMethod';
Method.GetRedelegationByValMethod = 'GetRedelegationByValMethod';
Method.GetPoolStateMethod = 'GetPoolStateMethod';
Method.GetParametersMethod = 'GetParametersMethod';
Method.GetProposalsMethod = 'GetProposalsMethod';
Method.GetDepositsMethod = 'GetDepositsMethod';
Method.GetVotesMethod = 'GetVotesMethod';
Method.GetProposalMethod = 'GetProposalMethod';
Method.GetDepositsByAddrMethod = 'GetDepositsByAddrMethod';
Method.GetVotesByAddrMethod = 'GetVotesByAddrMethod';
Method.GetParamsMethod = 'GetParamsMethod';
Method.GetSignInfoMethod = 'GetSignInfoMethod';
Method.GetDistrInfoByDelAndValMethod = 'GetDistrInfoByDelAndValMethod';
Method.GetDistrInfosMethod = 'GetDistrInfosMethod';
Method.GetValDistrInfoMethod = 'GetValDistrInfoMethod';
Method.GetNodeVersionMethod = 'GetNodeVersionMethod';
Method.GeLcdVersionMethod = 'GeLcdVersionMethod';
Method.GetBalanceMethod = 'GetBalanceMethod';

module.exports = {MethodProxy,Method};