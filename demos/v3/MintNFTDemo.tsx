import React, { useCallback, useState } from "react";
import { isInstalled, mintNFT, MintNFTRequest } from "@gemwallet/api";

const PAYLOAD: MintNFTRequest = {
  URI: '4d696e746564207468726f7567682047656d57616c6c657421',
  flags: {
    tfOnlyXRP: true,
    tfTransferable: true
  },
  transferFee: 3000, // 3%,
  NFTokenTaxon: 0,
  memos: [
    {
      memo: {
        memoType: '4465736372697074696f6e',
        memoData: '54657374206d656d6f'
      }
    }
  ]
};

export const MintNFTDemo = () => {
  const [txHash, setTxHash] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const response = await mintNFT(PAYLOAD);
      if (response.type === "reject") {
        setError("The transaction has been refused!");
        return;
      }

      setTxHash(response.result.hash);
    } catch (error) {
      setError("Something went wrong!");
    }
  }, []);

  return (
    <section>
      <div>
        This button mints a new NFT, with the following data:
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
        onClick={handleButtonClick}
        style={{ margin: "1em 0" }}
      >
        Mint NFT
      </button>
    </section>
  );
};
