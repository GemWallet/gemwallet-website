import React, { useCallback, useState } from "react";
import { isInstalled } from "@gemwallet/api";

export const IsInstalledDemo = () => {
  const [connectionMessage, setConnectionMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleConnect = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
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
        Check if GemWallet is installed
      </button>
    </section>
  );
};
