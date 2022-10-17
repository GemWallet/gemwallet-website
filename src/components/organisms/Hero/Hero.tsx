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
                A crypto <span className={styles.coloredText}>wallet</span>{" "}
                &amp; <span className={styles.coloredText}>Web3</span> layer for
                the XRPL
              </span>
            </h1>
            <p className={styles.paragraph}>
              GemWallet is a web extension that enables you to make fast
              payments on the XRP Ledger via your browser. It's a safer
              alternative to copying and pasting private keys for use with web
              applications.
            </p>
            <div className={styles.ctaContainer}>
              <div className={styles.ctaSubContainer}>
                <div className={styles.ctaWrapper}>
                  <Link
                    className={styles.ctaLink}
                    to="/blog/getting-started-with-gemwallet-beta#installation"
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
