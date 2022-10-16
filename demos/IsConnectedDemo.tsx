import React, { useCallback, useState } from "react";
import { isConnected } from "@gemwallet/api";

export const IsConnectedDemo = () => {
  const [input, setInput] = useState(" ");

  const handleConnect = useCallback(() => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        setInput("GemWallet is installed");
      } else {
        setInput("Please install GemWallet");
      }
    });
  }, []);

  return (
    <section>
      <div>
        Is GemWallet currently connected to your browser?
        <input
          readOnly
          value={input}
          style={{ display: "block", margin: "1em 0", width: "50%" }}
        />
      </div>
      <button type="button" onClick={handleConnect}>
        Check Connection
      </button>
    </section>
  );
};
