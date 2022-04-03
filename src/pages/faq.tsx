import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Title } from "../components/Title";
import { FAQ } from "../components/FAQ";

export default function Faq(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <Title>Frequently Asked Questions</Title>
        <FAQ
          title="Getting started"
          faqs={[
            {
              question: "How do I install GemWallet?",
              answer:
                "Go to GemWallet.app and click on the installation button.",
            },
            {
              question: "What does the red and green dot mean?",
              answer:
                "The red and green dot in the top right of GemWallet shows whether or not your wallet is connected to the blockchain.",
            },
            {
              question: "On which browsers can I install GemWallet?",
              answer:
                "You can install GemWallet on chromium browsers like Chrome, Brave, and Microsoft Edge.",
            },
            {
              question: "How can I install GemWallet on Firefox?",
              answer: "We are developing GemWallet to be supported on Firefox.",
            },
            {
              question: "Is GemWallet available on mobile, iOS, or Android?",
              answer:
                "GemWallet is NOT available on mobile, iOS, or Android yet. We will work on it.",
            },
          ]}
        />
        <FAQ
          title="Security"
          faqs={[
            {
              question: "How do we keep you and your crypto safe?",
              answer:
                "GemWallet encrypts your password and keys on your device, so only you have access to your accounts and data. You always choose what to share and what to keep private.",
            },
            {
              question: "How can I be sure that the GemWallet code is safe?",
              answer:
                "GemWallet code is open source. That means that the code is available for everybody to check: https://github.com/GemWallet/gemwallet-extension",
            },
            {
              question: "Privacy of my accounts",
              answer:
                "GemWallet needs you to authorize a transaction to an address to share your account address. You will see a GemWallet confirmation when websites request access to view your account address.",
            },
            {
              question: "Lost my password: How can I restore my wallet?",
              answer:
                "If you cannot remember your password, you must restore your account using your Secret Recovery Phrase and create a new password.",
            },
            {
              question: "How do we respect your privacy?",
              answer:
                "GemWallet doesn’t track any personally identifiable information, your account addresses, or asset balances.",
            },
          ]}
        />
        <FAQ
          title="Contribution: How can I contribute to GemWallet?"
          faqs={[
            {
              question: "I found a bug. What do I do?",
              answer:
                "Email us at contact@gemwallet.app or send us a direct message on Twitter: https://twitter.com/gemwallet_app If you are a dev, you can raise an issue here: https://github.com/GemWallet/gemwallet-extension/issues",
            },
            {
              question: "How do I give feedback to the developer team?",
              answer:
                "Open a GitHub issue here: https://github.com/GemWallet/gemwallet-extension/issues, or submit a feature request here: https://github.com/GemWallet/gemwallet-extension/pulls",
            },
          ]}
        />
        <FAQ
          title="Troubleshooting: Support FAQs"
          faqs={[
            {
              question: "How do I keep my extension up to date?",
              answer:
                "Our browser extension updates automatically if you installed it via the Chrome store.",
            },
            {
              question: "Questions are not answered: How do I contact support?",
              answer:
                "You can email us at contact@gemwallet.app or tweet @gemwallet_app",
            },
          ]}
        />
      </main>
    </Layout>
  );
}
