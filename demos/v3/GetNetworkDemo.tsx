import { useCallback, useState } from "react";
import { isInstalled, getNetwork } from "@gemwallet/api";

export const GetNetworkDemo = () => {
  const [network, setNetwork] = useState("");
  const [error, setError] = useState("");

  const handleNetwork = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }
      const responseGetNetwork = await getNetwork();
      if (responseGetNetwork.type === "reject") {
        setError("Sharing the network has been refused!");
        return;
      }

      setNetwork(responseGetNetwork.result.network);
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
