import { useCallback, useState } from "react";
import {
  isInstalled,
  submitBulkTransactions,
  SubmitBulkTransactionsRequest,
  TransactionBulkResponse,
} from "@gemwallet/api";

const PAYLOAD: SubmitBulkTransactionsRequest = {
  transactions: [
    {
      ID: "001", // Optional ID to identify the transaction in the response, after it has been submitted.
      TransactionType: "Payment",
      Destination: "rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",
      Amount: "100000",
    },
    {
      ID: "002",
      TransactionType: "TrustSet",
      LimitAmount: {
        currency: "ETH",
        issuer: "rnm76Qgz4G9G4gZBJVuXVvkbt7gVD7szey",
        value: "10000000",
      },
      Fee: "199",
    },
    {
      ID: "003",
      TransactionType: "Payment",
      Destination: "rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",
      Amount: "100000",
    },
    {
      ID: "004",
      TransactionType: "Payment",
      Destination: "rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",
      Amount: "100000",
    },
    {
      ID: "005",
      TransactionType: "Payment",
      Destination: "rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",
      Amount: "100000",
    },
    {
      ID: "006",
      TransactionType: "Payment",
      Destination: "rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",
      Amount: "100000",
    },
    {
      ID: "007",
      TransactionType: "Payment",
      Destination: "rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",
      Amount: "100000",
    },
    {
      ID: "008",
      TransactionType: "Payment",
      Destination: "rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",
      Amount: "100000",
    },
    {
      ID: "009",
      TransactionType: "Payment",
      Destination: "rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",
      Amount: "100000",
    },
    {
      ID: "010",
      TransactionType: "Payment",
      Destination: "rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",
      Amount: "100000",
    },
  ],
};

export const SubmitBulkTransactionsDemo = () => {
  const [txResult, setTxResult] = useState<TransactionBulkResponse[]>();
  const [error, setError] = useState("");

  const handleButtonClick = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const response = await submitBulkTransactions(PAYLOAD);
      if (response.type === "reject") {
        setError("The transaction has been refused!");
        return;
      }

      setTxResult(response.result.transactions);
    } catch (error) {
      console.error(error);
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
      {txResult ? (
        <pre>
          <code>{JSON.stringify(txResult, null, 4)}</code>
        </pre>
      ) : null}
      {!txResult && error ? (
        <div style={{ display: "block", margin: "1em 0" }}>Error: {error}</div>
      ) : null}
      <button
        type="button"
        onClick={handleButtonClick}
        style={{ margin: "1em 0" }}
      >
        Submit transactions
      </button>
    </section>
  );
};
