import React, { useCallback, useState } from "react";
import { isInstalled, setAccount, SetAccountRequest } from "@gemwallet/api";

const PAYLOAD: SetAccountRequest = {
  emailHash: '1D1382344586ECFF844DACFF698C2EFB'
};

export const SetAccountDemo = () => {
  const [txHash, setTxHash] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const response = await setAccount(PAYLOAD);
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
        This button sets the account, with the following data:
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
        Set account
      </button>
    </section>
  );
};
