import { useCallback, useState } from "react";
import { isInstalled, signMessage } from "@gemwallet/api";

const MESSAGE = "The message I want to get signed";

export const SignMessageDemo = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSignMessage = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const responseSignMessage = await signMessage(MESSAGE);
      if (responseSignMessage.type === "reject") {
        setError("The signature of the message has been refused!");
        return;
      }

      setMessage(responseSignMessage.result.signedMessage);
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
