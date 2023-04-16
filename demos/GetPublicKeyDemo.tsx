import React, { useCallback, useState } from "react";
import { isConnected, getPublicKey } from "@gemwallet/api";

export const GetPublicKeyDemo = () => {
  const [publicKey, setPublicKey] = useState("");
  const [error, setError] = useState("");

  const handlePublicKey = useCallback(async () => {
    try {
      const connected = await isConnected();
      if (!connected) {
        setError("Please install GemWallet");
        return;
      }

      const pbk = await getPublicKey();
      if (pbk === null) {
        setError("Sharing the public key has been refused!");
        return;
      }
      if (pbk === undefined) {
        setError("Something went wrong!");
        return;
      }

      setPublicKey(pbk.publicKey);
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
