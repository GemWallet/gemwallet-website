import { useCallback, useState } from "react";
import { isInstalled, getNFT, AccountNFToken } from "@gemwallet/api";

export const GetNFTDemo = () => {
  const [nfts, setNfts] = useState<AccountNFToken[]>();
  const [error, setError] = useState("");

  const handleNFT = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const responseGetNFT = await getNFT();
      if (responseGetNFT.type === "reject") {
        setError("Sharing the NFTs has been refused!");
        return;
      }

      setNfts(responseGetNFT.result.account_nfts);
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
