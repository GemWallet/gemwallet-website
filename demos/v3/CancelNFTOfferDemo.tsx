import React, { useCallback, useState } from "react";
import { isInstalled, cancelNFTOffer } from "@gemwallet/api";

export const CancelNFTOfferDemo = () => {
  const [txHash, setTxHash] = useState("");
  const [NFTOfferID, setNFTOfferID] = useState("");
  const [error, setError] = useState("");

  const handleCancelNFTOffer = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const response = await cancelNFTOffer({
        NFTokenOffers: [NFTOfferID]
      });
      if (response.type === "reject") {
        setError("The transaction has been refused!");
        return;
      }

      setTxHash(response.result.hash);
    } catch (error) {
      setError("Something went wrong!");
    }
  }, [NFTOfferID]);

  return (
    <section>
      <div>
        Input the NFT Offer ID to be cancelled:
        <input
          type="text"
          value={NFTOfferID}
          onChange={(e) => setNFTOfferID(e.target.value)}
        />
      </div>
      {txHash ? (
        <div style={{ display: "block", margin: "1em 0" }}>
          Transaction hash: {txHash}
        </div>
      ) : null}
      {!txHash && error ? (
        <div style={{ display: "block", margin: "1em 0" }}>Error: {error}</div>
      ) : null}
      <button
        type="button"
        onClick={handleCancelNFTOffer}
        style={{ margin: "1em 0" }}
      >
        Cancel NFT Offer
      </button>
    </section>
  );
};
