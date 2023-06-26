import React, { useCallback, useState } from "react";
import { isInstalled, createNFTOffer } from "@gemwallet/api";

const PAYLOAD = {
  amount: 50000000, // 50 XRP
}

export const CreateNFTOfferDemo = () => {
  const [txHash, setTxHash] = useState("");
  const [NFTokenID, setNFTokenID] = useState("");
  const [error, setError] = useState("");

  const handleCreateNFTOffer = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const response = await createNFTOffer({
        ...PAYLOAD,
        NFTokenID: NFTokenID
      });
      if (response.type === "reject") {
        setError("The transaction has been refused!");
        return;
      }

      setTxHash(response.result.hash);
    } catch (error) {
      setError("Something went wrong!");
    }
  }, [NFTokenID]);

  return (
    <section>
      <div>
        Input the NFT Token ID used to create the offer:
        <input
          type="text"
          value={NFTokenID}
          onChange={(e) => setNFTokenID(e.target.value)}
        />
      </div>
      <div style={{ display: "block", margin: "1em 0" }}>
        The following data will be used to create the offer:
        <pre>
          <code>{JSON.stringify(PAYLOAD, null, 4)}</code>
        </pre>
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
        onClick={handleCreateNFTOffer}
        style={{ margin: "1em 0" }}
      >
        Create NFT Offer
      </button>
    </section>
  );
};
