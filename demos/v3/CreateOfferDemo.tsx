import { useCallback, useState } from "react";
import { isInstalled, createOffer, CreateOfferRequest } from "@gemwallet/api";

const PAYLOAD: CreateOfferRequest = {
  takerGets: "10000000", // 10 XRP
  takerPays: {
    currency: "ETH",
    issuer: "rnm76Qgz4G9G4gZBJVuXVvkbt7gVD7szey",
    value: "0.1",
  },
  flags: {
    tfPassive: true,
  },
};

export const CreateOfferDemo = () => {
  const [txHash, setTxHash] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const response = await createOffer(PAYLOAD);
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
        This button creates a new offer, with the following data:
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
        Create offer
      </button>
    </section>
  );
};
