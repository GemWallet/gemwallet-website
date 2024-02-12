import Layout from "@theme/Layout";
import { Hero, Features } from "../components/organisms";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="GemWallet"
      description="The web crypto wallet available on browser extension on the XRP Ledger. Our vision is oriented toward payments, micro-payments, donations and payment streaming."
    >
      <Hero />
      <main>
        <Features />
      </main>
    </Layout>
  );
}
