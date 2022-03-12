import React, { useState } from "react";
import { isConnected, getNetwork } from "@gemwallet/api";

export const GetNetworkDemo = () => {
  const [networkResult, setNetworkResult] = useState("");

  const handleNetwork = () => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        getNetwork().then((network) => {
          setNetworkResult(network);
        });
      } else {
        setNetworkResult("Please install GemWallet");
      }
    });
  };

  return (
    <section>
      <div>
        What network is GemWallet using?
        <input
          readOnly
          value={networkResult}
          style={{ display: "block", margin: "1em 0", width: "50%" }}
        />
      </div>
      <button type="button" onClick={handleNetwork}>
        Get Network
      </button>
    </section>
  );
};
