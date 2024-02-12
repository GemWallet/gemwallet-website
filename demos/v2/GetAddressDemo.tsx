import { useCallback, useState } from "react";
import { isConnected, getAddress } from "@gemwallet/api-v2";

export const GetAddressDemo = () => {
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleAddress = useCallback(async () => {
    try {
      const connected = await isConnected();
      if (!connected) {
        setError("Please install GemWallet");
        return;
      }

      const address = await getAddress();
      if (address === null) {
        setError("Sharing the address has been refused!");
        return;
      }
      if (address === undefined) {
        setError("Something went wrong!");
        return;
      }

      setAddress(address);
    } catch (err) {
      setError("Something went wrong!");
    }
  }, []);

  return (
    <section>
      <div>What is your address?</div>
      {address ? (
        <div style={{ display: "block", margin: "1em 0" }}>
          Address: {address}
        </div>
      ) : null}
      {!address && error ? (
        <div style={{ display: "block", margin: "1em 0" }}>Error: {error}</div>
      ) : null}
      <button type="button" style={{ margin: "1em 0" }} onClick={handleAddress}>
        Get Address
      </button>
    </section>
  );
};
