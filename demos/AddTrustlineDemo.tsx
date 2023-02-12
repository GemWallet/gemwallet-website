import React, { useCallback, useState } from "react";
import { isConnected, addTrustline } from "@gemwallet/api";

export const AddTrustlineDemo = () => {
  const [input, setInput] = useState("");

  const btnHandler = useCallback(() => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        const transaction = {
          currency: "USD",
          issuer: "rwtDvu9QDfCskWuyE2TSEt3s56RbiWUKJN",
          value: "10000000",
        };
        addTrustline(transaction)
          .then((transactionHash) => {
            if (transactionHash === null) {
              setInput("The transaction has been refused!");
            } else if (transactionHash === undefined) {
              setInput("Something went wrong!");
            } else {
              setInput(transactionHash);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setInput("Please install GemWallet");
      }
    });
  }, []);

  return (
    <section>
      <div>This button is adding a USD trustline to your testnet:</div>
      <input
        readOnly
        value={input}
        style={{ display: "block", margin: "1em 0", width: "50%" }}
      />
      <button type="button" onClick={btnHandler}>
        Add Trustline
      </button>
      <div>
        You can use{" "}
        <a href="https://issue.cash/" target="_blank" rel="nofollow">
          https://issue.cash/
        </a>{" "}
        to get some USD funds from this trustline on the testnet
      </div>
    </section>
  );
};
