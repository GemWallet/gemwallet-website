import React, { useCallback, useState } from "react";
import { isConnected, addTrustline } from "@gemwallet/api-v2";

const TRANSACTION = {
  currency: "USD",
  issuer: "rwtDvu9QDfCskWuyE2TSEt3s56RbiWUKJN",
  value: "10000000",
};

export const AddTrustlineDemo = () => {
  const [txHash, setTxHash] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = useCallback(async () => {
    try {
      const connected = await isConnected();
      if (!connected) {
        setError("Please install GemWallet");
        return;
      }

      const transactionHash = await addTrustline(TRANSACTION);
      if (transactionHash === null) {
        setError("The transaction has been refused!");
        return;
      }
      if (transactionHash === undefined) {
        setError("Something went wrong!");
        return;
      }

      setTxHash(transactionHash);
    } catch (error) {
      setError("Something went wrong!");
    }
  }, []);

  return (
    <section>
      <div>This button adds a USD trustline to your testnet:</div>
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
        Add Trustline
      </button>
      <div>
        You can use{" "}
        <a href="https://issue.cash" target="_blank" rel="nofollow">
          issue.cash
        </a>{" "}
        to get some USD funds from this trustline on the testnet.
      </div>
    </section>
  );
};
