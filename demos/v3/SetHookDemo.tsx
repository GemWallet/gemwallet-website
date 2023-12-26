import React, { useCallback, useState } from "react";
import { isInstalled, setHook, SetHookRequest } from "@gemwallet/api";

const PAYLOAD: SetHookRequest = {
  hooks: [
    {
      Hook: {
        CreateCode:
          "0061736D01000000011C0460057F7F7F7F7F017E60037F7F7E017E60027F7F017F60017F017E02230303656E76057472616365000003656E7606616363657074000103656E76025F670002030201030503010002062B077F0141B088040B7F004180080B7F0041A6080B7F004180080B7F0041B088040B7F0041000B7F0041010B07080104686F6F6B00030AC4800001C0800001017F230041106B220124002001200036020C41920841134180084112410010001A410022002000420010011A41012200200010021A200141106A240042000B0B2C01004180080B254163636570742E633A2043616C6C65642E00224163636570742E633A2043616C6C65642E22",
        Flags: 1,
        HookApiVersion: 0,
        HookOn: "F".repeat(58) + "BFFFFE",
        HookNamespace:
          "3963ADEB1B0E8934C0963680531202FD511FF1E16D5864402C2DA63861C420A8",
        HookParameters: [
          {
            HookParameter: {
              HookParameterName: "ABCDEF12",
              HookParameterValue: "12345678",
            },
          },
        ],
        HookGrants: [
          {
            HookGrant: {
              HookHash:
                "78CAF69EEE950A6C55A450AC2A980DE434D624CD1B13148E007E28B7B6461CC8",
            },
          },
        ],
      },
    },
  ],
};

export const SetHookDemo = () => {
  const [txHash, setTxHash] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = useCallback(async () => {
    try {
      const responseIsInstalled = await isInstalled();
      if (!responseIsInstalled.result.isInstalled) {
        setError("Please install GemWallet");
        return;
      }

      const response = await setHook(PAYLOAD);
      if (response.type === "reject") {
        setError("The transaction has been refused!");
        return;
      }

      setTxHash(response.result.hash);
    } catch (error) {
      setError("Something went wrong!");
    }
  }, []);

  return (
    <section>
      <div>
        This button sets hooks to the account, with the following data:
        <pre>
          <code>{JSON.stringify(PAYLOAD, null, 4)}</code>
        </pre>
      </div>
      {txHash ? (
        <div style={{ display: "block", margin: "1em 0" }}>
          Transaction hash: {txHash}
        </div>
      ) : null}
      {!txHash && error ? (
        <div style={{ display: "block", margin: "1em 0" }}>Error: {error}</div>
      ) : null}
      <button
        type="button"
        onClick={handleButtonClick}
        style={{ margin: "1em 0" }}
      >
        Set hook
      </button>
    </section>
  );
};
