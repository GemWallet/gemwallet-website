import { useCallback, useState } from "react";
import { isInstalled, sendPayment } from "@gemwallet/api";

const PAYMENT = {
  amount: "50000000",
  destination: "rMrXopFSnCDSd5Eej4TpeHrV7SPjKtLpo2",
};

export const SendPaymentDemo = () => {
  const [txHash, setTxHash] = useState("");
  const [error, setError] = useState("");

  const handlePayment = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const responseSendPayment = await sendPayment(PAYMENT);
      if (responseSendPayment.type === "reject") {
        setError("The payment has been refused!");
        return;
      }

      setTxHash(responseSendPayment.result.hash);
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
        Send Payment
      </button>
    </section>
  );
};
