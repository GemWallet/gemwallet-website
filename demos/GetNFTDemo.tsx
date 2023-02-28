import React, { useCallback, useState } from "react";
import { isConnected, getNFT } from "@gemwallet/api";

export const GetNFTDemo = () => {
  const [nfts, setNfts] = useState<unknown[]>();
  const [isGemWalletInstalled, setIsGemWalletInstalled] =
    useState<boolean>(true);

  const handleNFT = useCallback(() => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        getNFT().then((nft) => {
          setNfts(nft || []);
        });
      } else {
        setIsGemWalletInstalled(false);
      }
    });
  }, []);

  return (
    <section>
      {!isGemWalletInstalled ? <div>Please install GemWallet</div> : null}
      <div>Show the NFTs held your wallet?</div>
      <button type="button" onClick={handleNFT}>
        Get my NFTs
      </button>
      {nfts !== undefined ? (
        <pre>
          <code>{JSON.stringify(nfts, null, 4)}</code>
        </pre>
      ) : null}
    </section>
  );
};
