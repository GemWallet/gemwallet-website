import React, { useCallback, useState } from "react";
import { isConnected, signMessage } from "@gemwallet/api-v2";

const MESSAGE = "The message I want to get signed";

export const SignMessageDemo = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSignMessage = useCallback(async () => {
    try {
      const connected = await isConnected();
      if (!connected) {
        setError("Please install GemWallet");
        return;
      }

      const signedMessage = await signMessage(MESSAGE);
      if (signedMessage === null) {
        setError("The signature of the message has been refused!");
        return;
      }
      if (signedMessage === undefined) {
        setError("Something went wrong!");
        return;
      }

      setMessage(signedMessage);
    } catch (error) {
      setError("Something went wrong!");
    }
  }, []);

  return (
    <section>
      <div>
        This button is using the following message to be signed:
        <pre>
          <code>{MESSAGE}</code>
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
        onClick={handleSignMessage}
      >
        Sign Message
      </button>
    </section>
  );
};
