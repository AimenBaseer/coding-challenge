interface Attribute {
  trait_type: string;
  value: string;
}

interface Creator {
  address: string;
  share: number;
  verified: number;
}

export interface NftType {
  attributes: Attribute[];
  collectionName: string;
  collectionTitle: string;
  content: string;
  createdAt: string;
  creators: Creator[];
  escrowPubkey: string;
  externalURL: string;
  id: string;
  img: string;
  isFrozen: boolean;
  isTradeable: boolean;
  listingType: string;
  mintAddress: string;
  onChainCollection: any;
  owner: string;
  price: number;
  primarySaleHappened: boolean;
  rarity: any;
  sellerFeeBasisPoints: number;
  supply: number;
  title: string;
  tokenDelegateValid: number;
  tokenStandard: number;
  updateAuthority: string;
  updatedAt: string;
}
