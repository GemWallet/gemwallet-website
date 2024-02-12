import { useCallback, useState } from "react";
import { isInstalled, getPublicKey } from "@gemwallet/api";

export const GetPublicKeyDemo = () => {
  const [publicKey, setPublicKey] = useState("");
  const [error, setError] = useState("");

  const handlePublicKey = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const responseGetPublicKey = await getPublicKey();
      if (responseGetPublicKey.type === "reject") {
        setError("Sharing the public key has been refused!");
        return;
      }

      setPublicKey(responseGetPublicKey.result.publicKey);
    } catch (error) {
      setError("Something went wrong!");
    }
  }, []);

  return (
    <section>
      <div>What is your public key?</div>
      {publicKey ? (
        <div style={{ display: "block", margin: "1em 0" }}>
          Public key: {publicKey}
        </div>
      ) : null}
      {!publicKey && error ? (
        <div style={{ display: "block", margin: "1em 0" }}>Error: {error}</div>
      ) : null}
      <button
        type="button"
        style={{ margin: "1em 0" }}
        onClick={handlePublicKey}
      >
        Get Public Key
      </button>
    </section>
  );
};
