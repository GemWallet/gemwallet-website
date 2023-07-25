import React, { FC } from "react";
import {
  HandThumbUpIcon,
  CogIcon,
  LockClosedIcon,
  ArrowsPointingOutIcon,
  ShieldCheckIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { Card } from "../../molecules";
import styles from "./styles.module.scss";

const features = [
  {
    name: "Fully decentralized",
    description: "No back-end servers, no data storage",
    icon: ArrowsPointingOutIcon,
  },
  {
    name: "Easy to Use",
    description: "GemWallet is designed from the ground up to be easy to use.",
    icon: HandThumbUpIcon,
  },
  {
    name: "Non-Custodial",
    description:
      "Your data is securely encrypted. GemWallet never has access to your funds. Ever.",
    icon: KeyIcon,
  },
  {
    name: "Developer ecosystem",
    description:
      "With GemWallet APIs it never has been that easy to integrate the XRPL on the web.",
    icon: CogIcon,
  },
  {
    name: "Privacy",
    description:
      "GemWallet doesn't track any personal identifiable information, your account addresses, or asset balances.",
    icon: LockClosedIcon,
  },
  {
    name: "Own your data",
    description:
      "No one has access to your master password, keys or the data stored on your device, except you. Not even GemWallet.",
    icon: ShieldCheckIcon,
  },
];

export const Features: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <h2 className={styles.title}>
          Our top features you will enjoy the most
        </h2>
        <p className={styles.subtitle}>
          GemWallet has everything you need to shine on the XRPL
        </p>
        <div className={styles.body}>
          <div className={styles.featureContainer}>
            {features.map(({ icon, name, description }) => (
              <Card
                key={name}
                icon={icon}
                name={name}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
