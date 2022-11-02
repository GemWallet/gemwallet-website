import React, { useCallback, useState } from "react";
import { isConnected, signMessage } from "@gemwallet/api";

export const SignMessageDemo = () => {
  const [input, setInput] = useState("");

  const btnHandler = useCallback(() => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        signMessage("The message I want to get signed").then(
          (signedMessage) => {
            if (signedMessage === null) {
              setInput("The signature of the message has been refused!");
            } else if (signedMessage === undefined) {
              setInput("Something went wrong!");
            } else {
              setInput(signedMessage);
            }
          }
        );
      } else {
        setInput("Please install GemWallet");
      }
    });
  }, []);

  return (
    <section>
      <div>
        This button is using the following message to be signed:
        <code>The message I want to get signed</code>
      </div>
      <input
        readOnly
        value={input}
        style={{ display: "block", margin: "1em 0", width: "50%" }}
      />
      <button type="button" onClick={btnHandler}>
        Sign Message
      </button>
    </section>
  );
};
