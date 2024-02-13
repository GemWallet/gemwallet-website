import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

interface SubtitleProps {
  children: ReactNode;
}

export const Subtitle: FC<SubtitleProps> = ({ children }) => {
  return <h2 className={styles.h2}>{children}</h2>;
};
