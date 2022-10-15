import React, { FC } from "react";
import {
  HandThumbUpIcon,
  CogIcon,
  LockClosedIcon,
  ArrowsRightLeftIcon,
  ShieldCheckIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { Card } from "../../molecules";

const features = [
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
      "GemWallet keeps your passwords and keys on your device, so only vou have access to your accounts and data.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Fast and secure payment",
    description:
      "GemWallet is using the XRP Ledger to make international payments secure in less than 5 seconds.",
    icon: ArrowsRightLeftIcon,
  },
];

export const Features: FC = () => {
  return (
    <div className="relative bg-slate-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Our top features you will enjoy the most
        </h2>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-300">
          GemWallet has everything you need to shine on the XRPL
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
