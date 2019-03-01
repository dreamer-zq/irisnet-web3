export class AbstractMethod {
    constructor(
        host: string,
        path: string,
        option: string,
    );

    beforeExecution(): void;
    afterExecution(response: any): Promise<any>;
    execute(params: any): Promise<any>;
}

export class AbstractModuleFactory {
    constructor(
        host: string,
    );

    hasMethod(name: string): boolean
    createMethod(name: string): AbstractMethod
    createModule(): AbstractModuleFactory
}

export class TmModuleFactory extends AbstractModuleFactory {
    constructor(
        host: string,
    );

    getNodeInfo(): Promise<any>;
    getBlock(): Promise<any>;
    getBlock(height: string| number): Promise<any>;
    getNodeState(): Promise<string>;
    getValidators(defaultBlock: string | number): Promise<any>;
    getValidators(): Promise<any>;
    getTx(hash: string): Promise<any>;
}

export class BankModuleFactory extends AbstractModuleFactory {
    constructor(
        host: string,
    );

    broadcast(tx: object): Promise<any>;
    broadcast(tx: object,async: boolean): Promise<any>;
    broadcast(tx: object,async: boolean,simulate: boolean): Promise<any>;
    getCoinType(denom: string): Promise<any>;
    getTokenStats(): Promise<any>;
    getAccount(address: string): Promise<any>;
    getBalance(address: string): Promise<any>;
}

export class StakeModuleFactory extends AbstractModuleFactory {
    constructor(
        host: string,
    );

    getAllDelegations(delAddr: string): Promise<any>;
    getAllUbd(delAddr: string): Promise<any>;
    getReDelegationsByDel(delAddr: string): Promise<any>;
    getValidatorsByDel(delAddr: string): Promise<any>;
    getValidatorsByDelAndVal(delAddr: string,valAddr: string): Promise<any>;
    getStakeTxsByDel(delAddr: string): Promise<any>;
    getDelegationsByDelAndVal(delAddr: string,valAddr: string): Promise<any>;
    getUbdByDelAndVal(delAddr: string,valAddr: string): Promise<any>;
    getValidators(): Promise<any>;
    getValidatorByAddr(valAddr: string): Promise<any>;
    getDelegationsByVal(valAddr: string): Promise<any>;
    getUbdByVal(valAddr: string): Promise<any>;
    getRedelegationByVal(valAddr: string): Promise<any>;
    getPoolState(): Promise<any>;
    getParameters(): Promise<any>;
}

export class GovModuleFactory extends AbstractModuleFactory {
    constructor(
        host: string,
    );

    getProposals(): Promise<any>;
    getProposals(voter: string): Promise<any>;
    getProposals(voter: string,depositor: string): Promise<any>;
    getProposals(voter: string,depositor: string,status: string): Promise<any>;
    getProposals(voter: string,depositor: string,status: string,limit: number): Promise<any>;
    getDeposits(proposalId: number): Promise<any>;
    getVotes(proposalId: number): Promise<any>;
    getProposal(proposalId: number): Promise<any>;
    getDepositsByAddr(proposalId: number,address: string): Promise<any>;
    getVotesByAddr(proposalId: number,address: string): Promise<any>;
    getParams(): Promise<any>;
}

export class SlashModuleFactory extends AbstractModuleFactory {
    constructor(
        host: string,
    );

    getSignInfo(valPubKey: string): Promise<any>;
}

export class DistrModuleFactory extends AbstractModuleFactory {
    constructor(
        host: string,
    );

    getDistrInfoByDelAndVal(delAddr: string,valAddr: string): Promise<any>;
    getDistrInfos(delAddr: string): Promise<any>;
    getValDistrInfo(valAddr: string): Promise<any>;
}

export class VersionModuleFactory extends AbstractModuleFactory {
    constructor(
        host: string,
    );

    getNodeVersion(): Promise<string>;
    getLcdVersion(): Promise<string>;
}
