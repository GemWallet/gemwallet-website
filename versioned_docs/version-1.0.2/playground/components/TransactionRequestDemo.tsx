import React, { useState } from "react";
import { isConnected, transactionRequest } from "@gemwallet/api";

export const TransactionRequestDemo = () => {
  const [transactionResult, setTransactionResult] = useState("");
  const btnHandler = () => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        const transaction = {
          chain: "xrp",
          network: "TEST",
          transaction: "payment",
          amount: "50",
          destination: "rNvFCZXpDtGeQ3bVas95wGLN6N2stGmA9o",
          token: "xrp",
          apiVersion: 1,
        };
        transactionRequest(transaction as any).then((status) => {
          setTransactionResult(status);
        });
      }
    });
  };
  return (
    <section>
      <div>
        Enter transaction information:
        <code>
          {JSON.stringify({
            chain: "xrp",
            network: "TEST",
            transaction: "payment",
            amount: "50",
            destination: "rNvFCZXpDtGeQ3bVas95wGLN6N2stGmA9o",
            token: "xrp",
            apiVersion: 1,
          })}
        </code>
      </div>
      <div>Result: {transactionResult}</div>
      <button type="button" onClick={btnHandler}>
        Make Transaction
      </button>
    </section>
  );
};
