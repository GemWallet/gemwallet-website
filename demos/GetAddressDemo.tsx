import React, { useCallback, useState } from "react";
import { isConnected, getAddress } from "@gemwallet/api";

export const GetAddressDemo = () => {
  const [input, setInput] = useState("");

  const handleAddress = useCallback(() => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        getAddress().then((address) => {
          if (address === null) {
            setInput("Sharing the address has been refused!");
          } else if (address === undefined) {
            setInput("Something went wrong!");
          } else {
            setInput(address);
          }
        });
      } else {
        setInput("Please install GemWallet");
      }
    });
  }, []);

  return (
    <section>
      <div>
        What is your address?
        <input
          readOnly
          value={input}
          style={{ display: "block", margin: "1em 0", width: "50%" }}
        />
      </div>
      <button type="button" onClick={handleAddress}>
        Get Address
      </button>
    </section>
  );
};
