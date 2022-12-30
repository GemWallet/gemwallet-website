import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { Subtitle, Title } from "../../components/atoms";
import { Showcase } from "../../components/molecules";
import styles from "./styles.module.scss";

const showcases = [
  {
    title: "GemWallet Store Demo",
    description: "A GemWallet e-commerce demo using the testnet",
    preview: require("./gemwallet-store.png"),
    website: "https://florianbouron.github.io/gemwallet-store-demo",
    source: "https://github.com/FlorianBouron/gemwallet-store-demo",
  },
  {
    title: "SolidiFi",
    description: "An XRP browser wallet including transactions and receipts.",
    preview: require("./solidifi-web.jpg"),
    website: "https://solidifi.app/wallet",
    source: null,
  },
];
export default function Faq(): JSX.Element {
  return (
    <Layout
      title="Showcase | GemWallet"
      description="List of websites the community is building with GemWallet. Add your project to the list by letting us know on GitHub."
    >
      <main className={styles.mainContainer}>
        <Title>Want to showcase your project?</Title>
        <Subtitle>
          If you want to showcase your project on this list, please open an
          issue to{" "}
          <Link href="https://github.com/GemWallet/gemwallet-website/issues">
            GemWallet's GitHub
          </Link>
          .
        </Subtitle>
        <ul className={styles.showcaseList}>
          {showcases.map((showcase) => (
            <Showcase key={showcase.title} {...showcase} />
          ))}
        </ul>
      </main>
    </Layout>
  );
}
