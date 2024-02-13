import { useCallback, useState } from "react";
import { isInstalled, burnNFT } from "@gemwallet/api";

export const BurnNFTDemo = () => {
  const [txHash, setTxHash] = useState("");
  const [NFTokenID, setNFTokenID] = useState("");
  const [error, setError] = useState("");

  const handleBurnNFT = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const response = await burnNFT({
        NFTokenID: NFTokenID,
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
        Input the NFT Token ID to burn:
        <input
          type="text"
          value={NFTokenID}
          onChange={(e) => setNFTokenID(e.target.value)}
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
      <button type="button" onClick={handleBurnNFT} style={{ margin: "1em 0" }}>
        Burn NFT
      </button>
    </section>
  );
};
