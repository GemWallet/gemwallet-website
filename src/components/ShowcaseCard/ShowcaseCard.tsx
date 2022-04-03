import React from "react";
import Image from "@theme/IdealImage";
import Link from "@docusaurus/Link";
import styles from "./styles.module.scss";

type Showcase = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
};
export function ShowcaseCard({showcase}: {showcase: Showcase}) {
  return (
    <li className={styles.container}>
      <div className={styles.imageContainer}>
        <Image img={showcase.preview} alt={showcase.title} />
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          <h4 className={styles.title}>
            <Link href={showcase.website} className={styles.showcaseCardLink}>
              {showcase.title}
            </Link>
          </h4>
          <Link
            href={showcase.source}
            className={styles.button}
          >
            source
          </Link>
        </div>
        <p className={styles.description}>{showcase.description}</p>
      </div>
    </li>
  );
}
