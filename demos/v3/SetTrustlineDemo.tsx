import React, { useCallback, useState } from "react";
import { isInstalled, setTrustline, SetTrustlineRequest } from "@gemwallet/api";

const TRANSACTION: SetTrustlineRequest = {
  limitAmount: {
    currency: "USD",
    issuer: "rwtDvu9QDfCskWuyE2TSEt3s56RbiWUKJN",
    value: "1000000",
  },
  flags: {
    tfSetNoRipple: true,
  },
};

export const SetTrustlineDemo = () => {
  const [txHash, setTxHash] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const responseSetTrustline = await setTrustline(TRANSACTION);
      if (responseSetTrustline.type === "reject") {
        setError("The transaction has been refused!");
        return;
      }

      setTxHash(responseSetTrustline.result.hash);
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
