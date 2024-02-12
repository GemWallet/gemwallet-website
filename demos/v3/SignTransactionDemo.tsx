import { useCallback, useState } from "react";
import {
  isInstalled,
  signTransaction,
  SignTransactionRequest,
} from "@gemwallet/api";

const PAYLOAD: SignTransactionRequest = {
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

export const SignTransactionDemo = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSignTransaction = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const responseSignTransaction = await signTransaction(PAYLOAD);
      if (responseSignTransaction.type === "reject") {
        setError("The signature of the message has been refused!");
        return;
      }

      setMessage(responseSignTransaction.result.signature);
    } catch (error) {
      setError("Something went wrong!");
    }
  }, []);

  return (
    <section>
      <div>
        This button is using the following transaction to be signed:
        <pre>
          <code>{JSON.stringify(PAYLOAD, null, 4)}</code>
        </pre>
      </div>
      {message ? (
        <div style={{ display: "block", margin: "1em 0" }}>
          Message: {message}
        </div>
      ) : null}
      {!message && error ? (
        <div style={{ display: "block", margin: "1em 0" }}>Error: {error}</div>
      ) : null}
      <button
        type="button"
        style={{ margin: "1em 0" }}
        onClick={handleSignTransaction}
      >
        Sign Transaction
      </button>
    </section>
  );
};
