import React, { useCallback, useState } from "react";
import { isConnected, sendPayment } from "@gemwallet/api-v2";

const PAYMENT = {
  amount: "50",
  destination: "rMrXopFSnCDSd5Eej4TpeHrV7SPjKtLpo2",
};

export const SendPaymentDemo = () => {
  const [txHash, setTxHash] = useState("");
  const [error, setError] = useState("");

  const handlePayment = useCallback(async () => {
    try {
      const connected = await isConnected();
      if (!connected) {
        setError("Please install GemWallet");
        return;
      }

      const transactionHash = await sendPayment(PAYMENT);
      if (transactionHash === null) {
        setError("The payment has been refused!");
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
      <div>
        This button is using the following payment information:
        <pre>
          <code>{JSON.stringify(PAYMENT, null, 4)}</code>
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
      <button type="button" style={{ margin: "1em 0" }} onClick={handlePayment}>
        Make Transaction
      </button>
    </section>
  );
};
