import { useCallback, useState } from "react";
import { isConnected, getNFT, AccountNFToken } from "@gemwallet/api-v2";

export const GetNFTDemo = () => {
  const [nfts, setNfts] = useState<AccountNFToken[]>();
  const [error, setError] = useState("");

  const handleNFT = useCallback(async () => {
    try {
      const connected = await isConnected();
      if (!connected) {
        setError("Please install GemWallet");
        return;
      }

      const nft = await getNFT();
      if (nft === null) {
        setError("Sharing the NFTs has been refused!");
        return;
      }
      if (nft === undefined) {
        setError("Something went wrong!");
        return;
      }

      setNfts(nft);
    } catch (error) {
      setError("Something went wrong!");
    }
  }, []);

  return (
    <section>
      <div>Show the NFTs held your wallet?</div>
      {nfts ? (
        <pre>
          <code>{JSON.stringify(nfts, null, 4)}</code>
        </pre>
      ) : null}
      {!nfts && error ? (
        <div style={{ display: "block", margin: "1em 0" }}>Error: {error}</div>
      ) : null}
      <button type="button" style={{ margin: "1em 0" }} onClick={handleNFT}>
        Get my NFTs
      </button>
    </section>
  );
};
