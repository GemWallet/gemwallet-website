import { useCallback, useState } from "react";
import { isConnected } from "@gemwallet/api-v2";

export const IsConnectedDemo = () => {
  const [connectionMessage, setConnectionMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleConnect = useCallback(async () => {
    try {
      const connected = await isConnected();
      if (!connected) {
        setConnectionMessage("Please install GemWallet");
        return;
      }

      setConnectionMessage("GemWallet is installed");
    } catch (error) {
      setError("Something went wrong!");
    }
  }, []);

  return (
    <section>
      <div>Is GemWallet currently connected to your browser?</div>
      {connectionMessage ? (
        <div style={{ display: "block", margin: "1em 0" }}>
          {connectionMessage}
        </div>
      ) : null}
      {!connectionMessage && error ? (
        <div style={{ display: "block", margin: "1em 0" }}>Error: {error}</div>
      ) : null}
      <button type="button" style={{ margin: "1em 0" }} onClick={handleConnect}>
        Check Connection
      </button>
    </section>
  );
};
