import React, { useState } from "react";
import { isConnected } from "@gemwallet/api";

export const IsConnectedDemo = () => {
  const [isConnectedState, setIsConnectedState] = useState(" ");
  const handleConnect = () => {
    isConnected().then((isConnected) => {
      setIsConnectedState(isConnected.toString());
    });
  };
  return (
    <section>
      <div>
        Is GemWallet currently connected to your browser?
        <input
          readOnly
          value={isConnectedState}
          style={{ display: "block", margin: "1em 0", width: "50%" }}
        />
      </div>
      <button type="button" onClick={handleConnect}>
        Check Connection
      </button>
    </section>
  );
};
