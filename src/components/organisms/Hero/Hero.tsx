import React, { FC } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import styles from "./styles.module.scss";

export const Hero: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.catchPhrase}>
              <span className="block">
                Your <span className={styles.coloredText}>gateway</span> to the{" "}
                <span className={styles.coloredText}>XRPL</span>
              </span>
            </h1>
            <p className={styles.paragraph}>
              GemWallet takes you into the world of the XRP Ledger. As a
              decentralized, browser-based extension, GemWallet ensures fast
              transactions and seamless interaction with Web3 applications.
              Experience total privacy with our fully decentralized structure -
              no back-end servers, no data storage, just secure and direct
              transactions on the XRPL. Uncover a new level of freedom and
              control with GemWallet.
            </p>
            <div className={styles.ctaContainer}>
              <div className={styles.ctaSubContainer}>
                <div className={styles.ctaWrapper}>
                  <Link
                    className={styles.ctaLink}
                    to="https://chrome.google.com/webstore/detail/gemwallet/egebedonbdapoieedfcfkofloclfghab"
                  >
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imageSubContainer}>
              <img
                className={styles.image}
                src={useBaseUrl("img/home-hero.png")}
                alt="Home hero"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
