import { useCallback, useState } from "react";
import { isInstalled, cancelOffer } from "@gemwallet/api";

export const CancelOfferDemo = () => {
  const [txHash, setTxHash] = useState("");
  const [offerSequence, setOfferSequence] = useState("");
  const [error, setError] = useState("");

  const handleCancelOffer = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const response = await cancelOffer({
        offerSequence: [offerSequence],
      });
      if (response.type === "reject") {
        setError("The transaction has been refused!");
        return;
      }

      setTxHash(response.result.hash);
    } catch (error) {
      setError("Something went wrong!");
    }
  }, [offerSequence]);

  return (
    <section>
      <div>
        Input the Offer Sequence to be cancelled:
        <input
          type="text"
          value={offerSequence}
          onChange={(e) => setOfferSequence(e.target.value)}
        />
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
        onClick={handleCancelOffer}
        style={{ margin: "1em 0" }}
      >
        Cancel Offer
      </button>
    </section>
  );
};
