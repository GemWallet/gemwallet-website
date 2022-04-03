import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    image: "/img/undraw_into_the_night.svg",
    description: (
      <>
        GemWallet is designed from the ground up to be easy to use. It is also
        provided with an API for an easy-to-use experience for developers.
      </>
    ),
  },
  {
    title: "Fast and secure payment",
    image: "/img/undraw_transfer_money.svg",
    description: (
      <>
        GemWallet is using the Ripple blockchain to make international payments
        secure in less than 5 seconds.
      </>
    ),
  },
  {
    title: "Own your data",
    image: "/img/undraw_security_on.svg",
    description: (
      <>
        GemWallet keeps your passwords and keys on your device, so only you have
        access to your accounts and data.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          alt={title}
          src={useBaseUrl(image)}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
