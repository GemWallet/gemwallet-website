import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Title } from "../../components/Title";
import { Subtitle } from "../../components/Subtitle";
import { ShowcaseCard } from "../../components/ShowcaseCard";
import styles from "./styles.module.scss";

const showcases = [
{
    title: 'GemWallet Store Demo',
    description: 'A GemWallet e-commerce demo using the testnet',
    preview: require('./gemwallet-store.png'),
    website: 'https://florianbouron.github.io/gemwallet-store-demo',
    source: 'https://github.com/FlorianBouron/gemwallet-store-demo',
  }
];
export default function Faq(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Awesome websites using GemWallet"
    >
      <main>
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
            <ShowcaseCard key={showcase.title} showcase={showcase} />
          ))}
        </ul>
      </main>
    </Layout>
  );
}
