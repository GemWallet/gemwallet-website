import { useCallback, useState } from "react";
import { isInstalled, getAddress } from "@gemwallet/api";

export const GetAddressDemo = () => {
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleAddress = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const responseGetAddress = await getAddress();
      if (responseGetAddress.type === "reject") {
        setError("Sharing the address has been refused!");
        return;
      }

      setAddress(responseGetAddress.result.address);
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
