import { useCallback, useState } from "react";
import { isConnected, getNetwork } from "@gemwallet/api-v2";

export const GetNetworkDemo = () => {
  const [network, setNetwork] = useState("");
  const [error, setError] = useState("");

  const handleNetwork = useCallback(async () => {
    try {
      const isConnectedResult = await isConnected();
      if (!isConnectedResult) {
        setError("Please install GemWallet");
        return;
      }
      const networkResult = await getNetwork();
      if (networkResult === null) {
        setError("Sharing the network has been refused!");
        return;
      }

      if (networkResult === undefined) {
        setError("Something went wrong!");
        return;
      }

      setNetwork(networkResult);
    } catch (error) {
      setError("Something went wrong");
    }
  }, []);

  return (
    <section>
      <div>What network is GemWallet using?</div>
      {network ? (
        <div style={{ display: "block", margin: "1em 0" }}>
          Network: {network}
        </div>
      ) : null}
      {!network && error ? (
        <div style={{ display: "block", margin: "1em 0" }}>Error: {error}</div>
      ) : null}
      <button type="button" style={{ margin: "1em 0" }} onClick={handleNetwork}>
        Get Network
      </button>
    </section>
  );
};
