import React, { useCallback, useState } from "react";
import { isConnected, sendPayment } from "@gemwallet/api";

export const SendPaymentDemo = () => {
  const [input, setInput] = useState("");

  const btnHandler = useCallback(() => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        const payment = {
          amount: "50",
          destination: "rMrXopFSnCDSd5Eej4TpeHrV7SPjKtLpo2",
        };
        sendPayment(payment).then((transactionHash) => {
          if (transactionHash === null) {
            setInput("The payment has been refused!");
          } else if (transactionHash === undefined) {
            setInput("Something went wrong!");
          } else {
            setInput(transactionHash);
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
        This button is using the following payment information:
        <code>
          {JSON.stringify({
            amount: "50",
            destination: "rMrXopFSnCDSd5Eej4TpeHrV7SPjKtLpo2",
          })}
        </code>
      </div>
      <input
        readOnly
        value={input}
        style={{ display: "block", margin: "1em 0", width: "50%" }}
      />
      <button type="button" onClick={btnHandler}>
        Make Transaction
      </button>
    </section>
  );
};
