import { FC } from "react";
import Image from "@theme/IdealImage";
import Link from "@docusaurus/Link";
import styles from "./styles.module.scss";

export interface ShowcaseProps {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string;
}

export const Showcase: FC<ShowcaseProps> = ({
  title,
  description,
  preview,
  website,
  source,
}) => {
  return (
    <li className={styles.container}>
      <div className={styles.imageContainer}>
        <Image img={preview} alt={title} />
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          <h4 className={styles.title}>
            <Link href={website} className={styles.showcaseCardLink}>
              {title}
            </Link>
          </h4>
          {source && (
            <Link href={source} className={styles.button}>
              source
            </Link>
          )}
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};
