import React, { useCallback, useState } from "react";
import { isConnected, getNetwork } from "@gemwallet/api";

export const GetNetworkDemo = () => {
  const [input, setInput] = useState("");

  const handleNetwork = useCallback(() => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        getNetwork().then((network) => {
          setInput(network);
        });
      } else {
        setInput("Please install GemWallet");
      }
    });
  }, []);

  return (
    <section>
      <div>
        What network is GemWallet using?
        <input
          readOnly
          value={input}
          style={{ display: "block", margin: "1em 0", width: "50%" }}
        />
      </div>
      <button type="button" onClick={handleNetwork}>
        Get Network
      </button>
    </section>
  );
};
