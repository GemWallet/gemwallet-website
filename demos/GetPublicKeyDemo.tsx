import React, { useCallback, useState } from "react";
import { isConnected, getPublicKey } from "@gemwallet/api";

export const GetPublicKeyDemo = () => {
  const [input, setInput] = useState("");

  const handlePublicKey = useCallback(() => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        getPublicKey().then(({ publicKey }) => {
          if (publicKey === null) {
            setInput("Sharing the public key has been refused!");
          } else if (publicKey === undefined) {
            setInput("Something went wrong!");
          } else {
            setInput(publicKey);
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
        What is your public key?
        <input
          readOnly
          value={input}
          style={{ display: "block", margin: "1em 0", width: "50%" }}
        />
      </div>
      <button type="button" onClick={handlePublicKey}>
        Get Public Key
      </button>
    </section>
  );
};
