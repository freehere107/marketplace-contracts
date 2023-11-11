import { KeyringPair } from '@polkadot/keyring/types';
import ArchNFTContract from '../../typechain-generated/contracts/arch_nft';
import MarketplaceContract from '../../typechain-generated/contracts/marketplace';
import PSP22Contract from '../../typechain-generated/contracts/my_psp22';
import { Id } from '../../typechain-generated/types-arguments/marketplace';
export declare function mintAndList(contract: MarketplaceContract, nft: ArchNFTContract, psp22: PSP22Contract, tokenId: Id, price: number, isNative?: boolean): Promise<void>;
export declare function genTime(fromStart: number, duration: number): {
    START_TIME: number;
    END_TIME: number;
};
export declare function mintAndApprove(contract: MarketplaceContract, nft: ArchNFTContract, tokenId: Id, minter: KeyringPair): Promise<void>;
export declare function mintAndListAuction(contract: MarketplaceContract, nft: ArchNFTContract, psp22: PSP22Contract, tokenId: Id, price: number, minBidStep: number, isNative?: boolean, duration?: number, fromStart?: number): Promise<{
    START_TIME: number;
    END_TIME: number;
}>;
