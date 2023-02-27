import React, { useCallback, useState } from "react";
import { isConnected, getNFT } from "@gemwallet/api";

export const GetNFTDemo = () => {
  const [numberOfNFTs, setNumberOfNFTs] = useState<number>();
  const [isGemWalletInstalled, setIsGemWalletInstalled] =
    useState<boolean>(true);

  const handleNFT = useCallback(() => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        getNFT().then((nft) => {
          setNumberOfNFTs(nft.length ?? 0);
        });
      } else {
        setIsGemWalletInstalled(false);
      }
    });
  }, []);

  return (
    <section>
      {!isGemWalletInstalled ? <div>Please install GemWallet</div> : null}
      <div>How many NFTs hold your wallet?</div>
      <button type="button" onClick={handleNFT}>
        Get the amount of NFTs
      </button>
      {numberOfNFTs !== undefined ? (
        <div>Your wallet hold {numberOfNFTs} NFT objects</div>
      ) : null}
    </section>
  );
};
