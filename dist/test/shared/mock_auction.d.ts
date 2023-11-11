import { KeyringPair } from '@polkadot/keyring/types';
import ArchNFTContract from '../../typechain-generated/contracts/arch_nft';
import MockAuctionContract from '../../typechain-generated/contracts/mock_auction';
import PSP22Contract from '../../typechain-generated/contracts/my_psp22';
import { Id } from '../../typechain-generated/types-arguments/mock_auction';
export declare function genTime(currentTime: number, fromStart: number, duration: number): {
    START_TIME: number;
    END_TIME: number;
};
export declare function mintAndApprove(contract: MockAuctionContract, nft: ArchNFTContract, tokenId: Id, minter: KeyringPair): Promise<void>;
export declare function mintAndListAuction(contract: MockAuctionContract, nft: ArchNFTContract, psp22: PSP22Contract, tokenId: Id, price: number, minBidStep: number, isNative?: boolean, duration?: number, fromStart?: number): Promise<{
    START_TIME: number;
    END_TIME: number;
}>;
