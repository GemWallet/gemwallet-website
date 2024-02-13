import { useCallback, useState } from "react";
import {
  isInstalled,
  submitTransaction,
  SubmitTransactionRequest,
} from "@gemwallet/api";

const PAYLOAD: SubmitTransactionRequest = {
  transaction: {
    TransactionType: "Payment",
    Destination: "rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",
    Amount: "100000",
    Memos: [
      {
        Memo: {
          MemoData: "54657374206D656D6F",
          MemoType: "4465736372697074696F6E",
        },
      },
    ],
  },
};

export const SubmitTransactionDemo = () => {
  const [txHash, setTxHash] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const response = await submitTransaction(PAYLOAD);
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
        This button submits the following transaction:
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
        Submit transaction
      </button>
    </section>
  );
};
